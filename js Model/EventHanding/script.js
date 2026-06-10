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