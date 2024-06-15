let x = "Gisho";
let y = x;
y = "Sindrik";
console.log(x); // Gisho
console.log(y); // Sindrik


let a = {
    name : "Bagrat"
}
let b = a;
b.name = "Srbazan";
console.log(a.name); // Srbazan 
console.log(b.name); // Srbazan

b = {name: "Vardan"}
console.log(a.name); // Srbazan 
console.log(b.name); // Vardan