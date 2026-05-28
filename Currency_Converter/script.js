// Select karna

let from = document.querySelector(".from select");

let to = document.querySelector(".TO select");

let fromFlag = document.querySelector(".from img");

let toFlag = document.querySelector(".TO img");

let text = document.querySelector(".exchange-rate");

let button = document.querySelector("button");

let amount = document.querySelector(".amount input");


// Country code

let country = {
    USD : "US",
    INR : "IN",
    NPR : "NP",
    PKR : "PK",
    MAD : "MA"
};


// Default flags

fromFlag.src = "https://flagsapi.com/US/flat/64.png";

toFlag.src = "https://flagsapi.com/IN/flat/64.png";


// From flag change

from.addEventListener("change", function(){

    let code = country[from.value];

    fromFlag.src =
    `https://flagsapi.com/${code}/flat/64.png`;

});


// To flag change

to.addEventListener("change", function(){

    let code = country[to.value];

    toFlag.src =
    `https://flagsapi.com/${code}/flat/64.png`;

});


// Convert button

button.addEventListener("click", async function(e){

    e.preventDefault();

    let amt = amount.value;

    // Empty ya invalid amount

    if(amt === "" || amt <= 0){

        amt = 1;

        amount.value = 1;
    }

    // API URL

    let URL =
    `https://open.er-api.com/v6/latest/${from.value}`;

    try{

        // API call

        let response = await fetch(URL);

        let data = await response.json();

        // Exchange rate

        let rate = data.rates[to.value];

        // Final amount

        let finalAmount = amt * rate;

        // Screen par show

        text.innerText =
        `${amt} ${from.value} = ${finalAmount.toFixed(2)} ${to.value}`;

    }

    catch(error){

        text.innerText = "Something went wrong";

        console.log(error);

    }

});