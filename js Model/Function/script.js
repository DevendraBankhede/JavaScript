greet();

function greet(){
    console.log("Hello");
}

// Question - > 2 fat function
let multiply = (a,b) => {
    return a * b;
};

// Question - > 3
function welcom(name){
    console.log(name);
}

welcom("Dev");

// Question - > 4 
function sayhi(name = "Guest"){
    console.log("Hi",name); 
}
sayhi();

// Question - > 5
function abcd(...val){
    console.log(val);  
}
abcd(1,2,3,4,5,6);

// Question - > 6
function abce(a,b,c,...val){
    console.log(a,b,c,val);  
}
abce(1,2,3,4,5,6);

// Question -> 7
function f(){
    return;
}
console.log(f());

// Question -> 8 closure function
function abcd(){
    let val = 0;
    return function () {
        console.log(val); 
    };
}

// Question - > 9 
function outer(){
    let count = 0;
    return function () {
        count++;
        console.log(count);
        
    };
}
const counter = outer();
counter();
counter();

// Question - > 10 IIFE
(function init(){
    console.log("Initialized");
})();