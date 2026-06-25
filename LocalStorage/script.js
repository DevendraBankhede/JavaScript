//data save karne ke liye
localStorage.setItem("username","Devendra");

//data read karne ke liye
const user = localStorage.getItem("username");
console.log(user);

//data delete karne ke liye
localStorage.removeItem("username");

//sab data clear karne ke liye
localStorage.clear();
