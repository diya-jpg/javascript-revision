function normalfunction(){
    console.log(this);
};


const Arrowfunction=()=>{
    console.log(this);
};


const obj={
    normalfxnmethod:normalfunction,
    arrowfxnmethod:Arrowfunction
}
obj.normalfxnmethod();
obj.arrowfxnmethod();


//features             regular func                 arrow
//1.this                depends on                  lexically 
//                                                 inherited from scope
//                     how the function is
//                      is called 
//2. new               new context                   does not create new context
//3. constructor       can be used                   cannot be used
//4.Hoisting          can be hoisted                  can not
//                     note:expressional
//                       can not hoisted
               