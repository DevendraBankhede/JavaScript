function handleSubmit(event){
    event.preventDefault();
    alert("form sumbitted Successfull");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password  = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;

    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Password:",password);
    console.log("mobile:",mobile);
    
    // console.log("Form Submitted");
}