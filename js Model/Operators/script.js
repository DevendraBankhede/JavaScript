let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
    
}
else{
    console.log("B");
}

// Question -> 2 
let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access granted");
}
else{
    console.log("Access denied");
    
}
// Question - > 3
let temp = 35;

if(!(temp < 30)){
    console.log("HOT"); 
}
else{
    console.log("Pleasant");
}

// Question - > 4 
let a = 0;

if(a){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

// Question - > 5 
let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >=60 ? "C" : "Fail";

console.log(grade);

// Question -> 6 
let LoggedIn = true;
let hasToken = false;

let access = LoggedIn && hasToken ? "Allow" : "deny";

console.log(access);

// Question - > 7 
let A = 5;
A++;
console.log(A);

// Question - > 8 
let X = 3;
let Y = X++;
console.log(X,Y);

// Question - > 9 
let p = 4;
let q = ++p;
console.log(p,q);

// Question - > 10 
let m = 10;
console.log(m--);
console.log(m);

// Question - > 11 
let n = 5;
let result = n++ + ++n;
console.log(result);

// Question - > 12
let Likes = 100;

function LikePost(){
    return ++Likes;
}
console.log(LikePost());
console.log(Likes);

// Question - >  13
let count = 5;
if(count-- === 5){
        console.log("Matched");   
}
else{
    console.log("Not matched");
}