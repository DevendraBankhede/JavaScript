let obj = {
    name: "Devendra",
    age: 22,
    isEnrolled: true,
};

// Question - > 2
const obj1 = {
        true: "Yes",
        42: "Answer",
};
console.log(obj1[42]);

// Question - > 3
const user = {
    "first-name": "Devendra",
};
user["first-name"];

// Question - > 4
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1]);
    
});

// Question - > 5
const obj2 = {info:{ score: 80}};
let newobj = JSON.parse(JSON.stringify(obj2));
newobj.info.score = 100;