const baseUser = {
  sayHi() {
    console.log("Haylo Haylo", this.name);
  },
};

User.prototype = baseUser;
function User(name, money, age) {
  // this = {}
  // this.__proto__ = User.prototype;
  this.name = name;
  this.age = age;
  this.money = money;
  // return this
}
let user1 = new User("hakob", 10, 88);
function Admin(name, money, age) {
  this.name = name;
  this.age = age;
  this.money = money;
}
Admin.prototype = baseUser;
let admin1 = new Admin("Gisho", 1000000, 66);
admin1.sayHi();
user1.sayHi();
