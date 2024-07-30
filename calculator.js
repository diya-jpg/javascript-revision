//Functional Constructor

function calculator(a,b,operation){
 return operation(a,b);
}

function sum(a,b){
return a+b;
}
function sub(a,b){
    return a-b;
    }
    function multiply(a,b){
        return a+b;
        }
        console.log(calculator(3,5,sum));
        console.log(calculator(3,5,sub));
        console.log(calculator(3,5,multiply));