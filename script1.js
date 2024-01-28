// Question-1 1. How to compare two JSON have the same properties without order?

let obj1 = { name: "Person 1", age:5 };

let obj2 = { age:5, name: "Person 1" };

if(obj1.name == obj2.name &&obj1.age == obj2.age ){
console.log('input is same')
}
else{
console.log('input is not same')