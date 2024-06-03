const animal = {
  health: 100,
  type: "animal",

  eat(amount) {
    this.health += amount;
  },

  sleep(amount) {
    this.health += amount;
  },

  play() {
    console.log("Playing");
  },
};

// const rabit = {
//   name: "Rabit",
//   speed: 150,
//   strength: 10,

//   health: 100,
//   type: "animal",

//   eat(amount) {
//     this.health += amount;
//   },

//   sleep(amount) {
//     this.health += amount;
//   },

//   play() {
//     console.log("Playing");
//   },
// };

// const wolf = {
//   name: "Wolf",
//   speed: 130,
//   strength: 50,

//   health: 100,
//   type: "animal",

//   eat(amount) {
//     this.health += amount;
//   },

//   sleep(amount) {
//     this.health += amount;
//   },

//   play() {
//     console.log("Playing");
//   },
// };

const Rabit = function (name, speed, strength, health) {
  // this = {}
  // this.__proto__ = Rabit.prototype
  this.name = name;
  this.speed = speed;
  this.strength = strength;
  this.health = health;
  //   return this;
};

Rabit.prototype = animal;

const newRabit = new Rabit("Rabit Jo", 150, 10, 100);
console.log(newRabit);
console.log(newRabit.type);
newRabit.eat(30); // this = newRabit
animal.eat(30); // this = animal
console.log(newRabit);

// [[Prototype]] - Օբյեկտի պրոտոտիպը որը օգտագործվում է ջավասքրիփթի ինտերպրետատորի կողմից
// F.prototype - Օբյեկտի պրոտոտիպը որը օգտագործվում է կոնստրուկտորի կողմից (օր Rabit.prototype = animal;)
// __proto__ - Օբյեկտի պրոտոտիպի getter/setter, որի միջոցով կարող ենք ստանալ և նշանակել Օբյեկտի պրոտոտիպը
