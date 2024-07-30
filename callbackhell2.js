function cake_purchase(callback){
    setTimeout(()=>{
        console.log("Cake purchased");
    },2000);
    callback();
}
function curtain_dec(callback){
    setTimeout(()=>{
        console.log("Curtain Down");
    },2000);
    callback();
}
function ballons(callback){
    setTimeout(()=>{
        console.log("Ballons released");
    },2000);
    //callback();
}
function cake_cutting(){                        //Callback hell it is
    setTimeout(()=>{
        console.log("Cake cutting");
    },2000);
}

// cake_purchase(()=>{
//     curtain_dec(()=>{
//         ballons(()=>{
//             cake_cutting();
//         });
//     });
// });

cake_purchase()
    .then(()=>curtain_dec())
       .then(()=> ballons())
            .then(()=>cake_cutting())
  .catch((e)=>console.log(e))
  .finally(()=>console.log("Happily Ended"));