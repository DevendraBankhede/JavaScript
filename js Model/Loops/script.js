for(let i = 0; i < 11; i++){
    console.log(i);
}

// Question - > 2
let i = 10;
while(i > 0){
    console.log(i);
    i--;
}

// Question - > 3 
for(let i = 0; i < 21; i++){
    if(i % 2 === 0){
        console.log(i); 
    }
}

// Question - > 4 
let j = 1;
while(j < 16){
    if(j % 2 === 1){
        console.log(j);
    }
    j++;
}

// Question -> 5 
for(let i = 1; i < 11; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

// Question -> 6 

let sum = 0;
for(let i = 1; i < 101; i++){
    sum = sum + i;
}
console.log(sum);

// Question - > 7
for(let i = 1;i < 51; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

// Question - > 8
let val = prompt("give a number");
for(let i = 1;i <= val; i++){
    if(i%2 === 0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

// Question - >9
for(let i = 1; i < 101; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i);
    }
}

// Question - > 10 
let count = 0;
for(let i = 1; i < 100 ; i++){
    if(i%2===1){
        count++;
        console.log(i);
    }
    if(count === 5) break;
}

// Question - > 11

for(let i = 1; i <= 20; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}