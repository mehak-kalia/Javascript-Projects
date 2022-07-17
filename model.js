let amount = 1000;
var promocode = "TRYNEW";

console.log("Amount is: \u20b9"+amount)
console.log("Promocode is:"+promocode)

amount = 1200;

console.log("Amount is: \u20b9"+amount)
console.log("Promocode is:"+promocode)
console.log(typeof promocode)

let age = "12";
let numAge = Number(age);
console.log(typeof age);
console.log(typeof numAge)

/* BigInt : integer occupies 64 bit space , n is a literal to denote bigint
String
Number
Boolean
Undefined
Null
Symbol -> Kind of a constant
Object -> Multi Value Container | 
Array
*/

let a;
console.log(a);

a = 1
console.log(a);


let b = null;
console.log(b);

let c = Boolean(1);
console.log(c)

const value = Symbol("Instagram")
console.log("value is: "+value.description+"and type is:"+typeof value)


let student = {
    roll: 101,
    name: "John",
    age: 20
}

console.log("student is:"+student+"and type of student"+typeof student)

console.log(student)