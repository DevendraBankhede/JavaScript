let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

    form.addEventListener("submit",function(dets){
    dets.preventDefault();

    document.querySelector("#emailMessage").textContent = "";
    document.querySelector("#passwordMessage").textContent = "";

    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
        document.querySelector("#emailMessage").textContent = "Email is incorrect";
        document.querySelector("#emailMessage").style.display = "initial";
         isValid = false;
    }
    if(!passwordans ){
        document.querySelector("#passwordMessage").textContent = "Password is incorrect";
        document.querySelector("#passwordMessage").style.display = "initial";
         isValid = false;
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent= 
            "Everything is correct";
    }
});
