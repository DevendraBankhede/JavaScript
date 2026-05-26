let a = 10;  //block scope, globle
{
    let a = 20;
    console.log("Inside,a");
}
console.log("Outside",a);
