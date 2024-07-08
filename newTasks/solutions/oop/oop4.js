class Animal {
  constructor(name, species){
    this.name = name;
    this.species = species;
  }
}


class Dog extends Animal{
  bark(){
    console.log("Woof!")
  }
}

const dog = new Dog('Buddy', 'Canine');
const result = dog.bark();
// Ожидаемый результат: "Woof!"