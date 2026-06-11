let p = document.querySelector("p");

p.addEventListener("click",function(){
    p.style.color = "green";
});
 
// Question - > 2 
let input = document.querySelector("input");

input.addEventListener("input",function(evt){
    if(evt.data !== null){
        console.log(evt.data);  
    }
});

// Question -> 3
let sel =  document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change",function(evt){
    device.textContent = `${evt.target.value} Device Selected`;
});

// Question - > 4 
let h2 = document.querySelector("h2");
window.addEventListener("keydown",function(dets){
    if(dets.key === " "){
        h2.textContent = "SPC";
    }
    else{
        h2.textContent = dets.key;
    }
});

// Question - > 5
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click",function(){
    fileinp .click();
});

fileinp.addEventListener("change",function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
});