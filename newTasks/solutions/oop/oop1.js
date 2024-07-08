
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name}`);
  }
}


const person = new Person('Alice', 30);
const result = person.greet();
// Ожидаемый результат: "Hello, my name is Alice."