function main(){
   setTimeout(()=>{
    console.log("1");
console.log("2");
console.log("3");
   },7000)
    
}
console.log("8");
console.log("9");
console.log("10");
console.log("4");
console.log("5");

main();                     //event loop
function sum(){   //but the style is stack
    setTimeout(()=>{
        console.log("one");
    console.log("two");
    console.log("three");
       },4000)
}   
        //javascript follow queue(jab bulaya gaya jab hi print hona chahiye)
             //event loop hi main ko bhar lekar aane ka kam kar rahi hai                         
sum();