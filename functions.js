//functional hoisting
//name function
//anonymous function
//expressional function
//arrow function
//anonymous arrow function
//expressional arrow function
//function constructor
//function expression
//function declaration
//immediately invoked functional expressions
//function expression with arguments


//functional definition
//function calling
//functional declaration or prototype of the function
//prototype=>function name and its properties like how many arguments are been taken by the function

// function abc(){
//     console.log("hello,peter");
// }
// abc();


// function sum(a,b){
//     let s=a+b;
//     console.log(`sum is ${s}`);
// }
// sum(3,5);

//positional arguments->position matters


// 4 segments->
// Physical memory divide->
// Code |Data stack segment->function
// stack|heap  data segment->variables


//  const sum=function(a,b){
//     let s=a+b;
//     console.log(`sum is ${s}`);
// }
// sum(3,5);
//How many variables can be pass to the function?
// const sum2=function(...nums){
//     // let s=a+b;
//     // console.log(`sum is ${s}`);
//     console.log(nums);
// }
// sum2(3,5,4,6);
//spread operator->nums iss a array ,nums can use any function used by the array


const sum2=(...nums)=>{
    // let s=a+b;
    // console.log(`sum is ${s}`);
    console.log(nums);
}
sum2(3,5,4,6);
//arrow function do not use the this pointer

