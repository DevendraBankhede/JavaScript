let frute = ["apple","banana","Orange"];
frute.push("Mango");
frute.unshift("Pineapple");

// Question - >2
let color = ["Green","Yello"];
color.splice(1,0,"Red","Blue");

// Question - > 3
let item = [1,2,3,4,5,6];
let newarr = item.slice(1,4);
console.log(newarr);

// Question - > 4
let arr = [1,2,3,4,5];
let newArr = arr.map(function(val){
    return val*val;
});

// Question - > 5
let Arr = [5,12,8,20,3];
let newArr1 = Arr.filter((val) => {
        return val > 10;
});

// Question - > 6
let arr2 = [10,20,30];
let sum = arr2.reduce(function(acc,val){
    return acc + val;
},0);

// Question - > 7
let arr3 = [12,15,3,8,20];
let ans = arr3.find(function(val){
    return val < 10;
});

// Question - > 8
let arr4 = [45,60,28,90];
let ans1 = arr4.some(function(val){
        return val < 35;
});

// Question - > 9
let arr5 = [2,4,6,8,10];
let ans2 = arr5.every(function(val){
    return val % 2 === 0;
});

// Question - > 10
let a = [1,2];
let b = [3,4];

let c = [...a, ...b];

// Question - > 11
let country = ["USA","UK"];
country = ["INDIA", ...country];