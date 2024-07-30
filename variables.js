//How you differentiate betweeen let,var,const

//scope
//reassignment
//redeclaration
//mutability
//immutability
//closures
//hoisting


//Javascript is the intrepreter  and  not a complier based 
//Javascript uses queue
//{}->block scope 
//not {}->function scope(global scope)


//(Scope)
// {
//     var a=5;
//     console.log(a);
// }
// console.log (a);

// {
//     let a=5;
//     console.log(a);
// }
// console.log (a);

// var a=10;
// function variable(){    //enviroment same
//     {
//     var a=5;   //function scope->jab tak function exist karega jaba tak aka scopr rahega
                 
//     console.log(a);  //jab function ka scope existence nahi hai toh a ka bhi scope khatm ho jayega
//     }

//     console.log(a);      //a ka scope apne environment me toh hai
//                           //functions create the environment
//                           //Each functions create an environment

// }

// variable();
// console.log(a);


//hoisting
// console.log(a);
// var a=5;
// console.log(a);


//mutability,reassignment,immutability,redeclarations


//mutability->Changes allowed(let and const are mutable variables)
//immutability->Changes not allowed(const are not immutabile variable)

//reassignment(overlapping)->one to one mapping hai means let ka let me hoga var ka var me hoga


 
 //const to ho nahi sakta kyunki ye mutable hai bacche let and const dono me overlapping possible hai and var me redeclare bhi ho sakta hai
//var a=5;
 //  var a=10;
// console.log(a);

//Closures
//  a=5;                 //lexical scope
// function variable(){ //bada environment bana hai
//            let b=15;
//            let a=15;           
//    console.log(a);
//    console.log(b);   //inner toh hi hai outer bhi hai but aapko dikh nahi raha that is main stack
// }
// variable();
// console.log(a);







