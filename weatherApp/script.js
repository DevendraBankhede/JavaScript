// OpenWeatherMap API key (Optional - if left blank or placeholder, Open-Meteo free API will be used)
const API_KEY = "Enter your API_KEY"; 

const searchBtn = document.getElementById("btn");
const cityInput = document.getElementById("cityname");
const errorMsg = document.getElementById("error-msg");
const weatherIcon = document.getElementById("weather-icon");

// Map Open-Meteo weather codes to Bootstrap Icons
function getWeatherIconByCode(code) {
    if (code === 0) return "bi-sun-fill text-warning"; // Clear sky
    if ([1, 2, 3].includes(code)) return "bi-cloud-sun-fill text-warning"; // Mainly clear, partly cloudy
    if ([45, 48].includes(code)) return "bi-cloud-fog2"; // Fog
    if ([51, 53, 55, 56, 57].includes(code)) return "bi-cloud-drizzle-fill text-info"; // Drizzle
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "bi-cloud-rain-heavy-fill text-info"; // Rain
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "bi-cloud-snow"; // Snow
    if ([95, 96, 99].includes(code)) return "bi-cloud-lightning-rain-fill text-warning"; // Thunderstorm
    return "bi-cloud-sun-fill";
}

// Map OpenWeatherMap icon names
function getWeatherIconByOWM(main) {
    switch (main.toLowerCase()) {
        case 'clear': return "bi-sun-fill text-warning";
        case 'clouds': return "bi-cloud-sun-fill text-warning";
        case 'rain': return "bi-cloud-rain-heavy-fill text-info";
        case 'drizzle': return "bi-cloud-drizzle-fill text-info";
        case 'thunderstorm': return "bi-cloud-lightning-rain-fill text-warning";
        case 'snow': return "bi-cloud-snow";
        case 'mist':
        case 'fog':
        case 'haze': return "bi-cloud-fog2";
        default: return "bi-cloud-sun-fill";
    }
}

function showError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}

function hideError() {
    errorMsg.style.display = "none";
    errorMsg.innerText = "";
}

async function checkWeather(city) {
    const cityName = city || cityInput.value.trim();

    if (!cityName) {
        showError("Please enter a city name!");
        return;
    }

    hideError();

    // If a custom OpenWeatherMap key is set, try OpenWeatherMap first
    if (API_KEY && API_KEY !== "Enter your API_KEY") {
        try {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`;
            const response = await fetch(API_URL);
            
            if (!response.ok) {
                if (response.status === 404) {
                    showError("Invalid city name! Please try again.");
                    return;
                }
                throw new Error("OWM fetch failed");
            }

            const data = await response.json();
            document.querySelector(".city").innerText = data.name + (data.sys?.country ? `, ${data.sys.country}` : "");
            document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerText = data.main.humidity + "%";
            document.querySelector(".wind").innerText = Math.round(data.wind.speed * 3.6) + " km/h";
            
            weatherIcon.className = `bi display-3 ${getWeatherIconByOWM(data.weather[0].main)}`;
            return;
        } catch (err) {
            console.warn("OpenWeatherMap failed or unauthorized, falling back to Open-Meteo", err);
        }
    }

    // Default / Fallback: Open-Meteo Free Weather API (No API key required)
    try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            showError("Invalid city name! Please try again.");
            return;
        }

        const location = geoData.results[0];
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
        
        const weatherRes = await fetch(weatherUrl);
        if (!weatherRes.ok) {
            showError("Unable to fetch weather data. Please try again.");
            return;
        }

        const weatherData = await weatherRes.json();
        const current = weatherData.current;

        const displayName = location.name + (location.country ? `, ${location.country}` : "");
        document.querySelector(".city").innerText = displayName;
        document.querySelector(".temp").innerText = Math.round(current.temperature_2m) + "°C";
        document.querySelector(".humidity").innerText = current.relative_humidity_2m + "%";
        document.querySelector(".wind").innerText = Math.round(current.wind_speed_10m) + " km/h";

        weatherIcon.className = `bi display-3 ${getWeatherIconByCode(current.weather_code)}`;
    } catch (error) {
        console.error("Error fetching weather:", error);
        showError("Something went wrong. Please check your connection.");
    }
}

// Event Listeners
searchBtn.addEventListener("click", () => checkWeather());

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather();
    }
});

// Load default city on initial page load
checkWeather("New York");