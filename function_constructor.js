//function constructor
function Person(name,age){
    this.name=name;
    this.age=age;
}
const obj=new Person("Diya","42");
console.log(obj.name);
console.log(obj.age);
//there is no need to define class