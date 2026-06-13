document.querySelector("#nav").addEventListener("click",function(){
    alert("clicked");
});

let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets) {
    dets.target.style.textDecoration = "line-through";
});