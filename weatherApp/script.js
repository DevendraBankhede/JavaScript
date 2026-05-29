 document.getElementById("btn").addEventListener("click", () => {

    const API_KEY = "Enter your API_KEY";
    const city = document.getElementById("cityname").value;

    const API_URL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    async function checkWeather() {

        const response = await fetch(API_URL);

        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp - 273.15) + "°C";

        document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";

        document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/h";

        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windspeed: data.wind.speed,
        };

        console.log(weatherData);
    }

    checkWeather();

});