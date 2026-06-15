let na = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    if (na.value.length > 2) {
        console.log("Valid name");
    } else {
        console.log("Name must be greater than 2 characters");
    }
});