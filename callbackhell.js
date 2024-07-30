function cake_purchase(){
    setTimeout(()=>{
        console.log("Cake purchased");
    },2000);
}
function curtain_dec(){
    setTimeout(()=>{
        console.log("Curtain Down");
    },2000);
}
function ballons(){
    setTimeout(()=>{
        console.log("Ballons released");
    },2000);
}
function cake_cutting(){                        //Callback queues
    setTimeout(()=>{
        console.log("Cake cutting");
    },2000);
}
cake_cutting();
console.log("Happy Birthday 1");
console.log("Happy Birthday 2");
console.log("Happy Birthday 3");
cake_purchase();
console.log("Happy Birthday 4");
console.log("Happy Birthday 5");
curtain_dec();
console.log("Happy Birthday 6");
ballons();
console.log("Happy Birthday 7");
console.log("Happy Birthday 8");

console.log("Happy Birthday 9");
console.log("Happy Birthday 10");