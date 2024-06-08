class User {
  constructor(name, age, dateOfBirth, dateOfRegistration) {
    // this = {};
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.dateOfRegistration = dateOfRegistration;
    // return this;
  }

  sayHi() {
    // console.log("Hello, my name is ", this.name);
  }

  changeName(newName) {
    this.name = newName;
  }

  deleteUser() {
    delete this;
    return true;
  }
}

// User.sayHi();

const user1 = new User("John", 25, "01/01/1995", "01/01/2020");
const user2 = new User("Jane", 30, "01/01/1990", "01/01/2015");

user1.changeName("Jack");
user1.sayHi();

class Admin extends User {
  constructor(name, age, dateOfBirth, dateOfRegistration, role) {
    super(name, age, dateOfBirth, dateOfRegistration);
    this.role = role;
  }

  deleteActivityDB() {
    // console.log("Deleted ActivityDB");
  }
}

// Admin.

const admin1 = new Admin("John", 25, "01/01/1995", "01/01/2020", "admin");
const admin2 = new Admin("Jane", 30, "01/01/1990", "01/01/2015", "superAdmin");
const admin3 = new Admin("Jack", 35, "01/01/1985", "01/01/2010", "moderator");

class Article {
  constructor(title, text, author, date) {
    this.title = title;
    this.text = text;
    this.author = author;
    this.date = date;
  }
  static compareArticles(article1, article2) {
    return article1.date - article2.date;
  }
}

// const compareArticles = (article1, article2) => {
//   return article1.date - article2.date;
// }

const article1 = new Article(
  "Title 1",
  "Text 1",
  "Author 1",
  new Date("2020-01-01"),
);
const article2 = new Article(
  "Title 2",
  "Text 2",
  "Author 2",
  new Date("2020-01-02"),
);
const article3 = new Article(
  "Title 3",
  "Text 3",
  "Author 3",
  new Date("2020-01-03"),
);
const article4 = new Article(
  "Title 4",
  "Text 4",
  "Author 4",
  new Date("2020-01-04"),
);
const articleArray = [article4, article2, article3, article1];

// console.log(article1.compareArticles(article3, article2));

console.log(Article.compareArticles(article1, article2));

// console.log(articleArray.sort(compareArticles));

class NewsArticle extends Article {
  constructor(title, text, author, date, source) {
    super(title, text, author, date);
    this.source = source;
  }
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static add(vector1, vector2) {
    const newX = vector1.x + vector2.x;
    const newY = vector1.y + vector2.y;
    return new Vector(newX, newY);
  }
}

const vector1 = new Vector(1, 2);
const vector2 = new Vector(2, 3);

// vector1.add(vector1, vector2);

// console.log(vector1.add(vector1, vector2));

class PhysicsEngine {
  static G = 9.8;
  b = 10;

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static calculateForce(mass, acceleration) {
    return mass * acceleration;
  }
}
const physicsEngine = new PhysicsEngine(30, 23);
console.log(physicsEngine.a);
console.log(physicsEngine.b);
PhysicsEngine.G;

class ApiHelper {
  static LONG_API_KEY =
    "21321312312312321ioejadsldasoilhedj12li3h12ehnewqlkjdasoidfjsdaoidfj1o3i12j21oil3j12iodas";

  static async fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
}

ApiHelper.LONG_API_KEY;

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    throw "This method should be overridden";
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!");
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound(); // Woof! Woof!
cat.makeSound(); // Meow! Meow!

class Animal2 {
  constructor(name) {
    this.name = name;
  }
}

class Dog2 extends Animal2 {
  hafHaf() {
    console.log("Woof! Woof!");
  }
}

class Cat2 extends Animal2 {
  myau() {
    console.log("Meow! Meow!");
  }
}

const dog1 = new Dog2("Buddy");
const cat1 = new Cat2("Whiskers");

dog1.hafHaf(); // Woof! Woof!
cat1.myau(); // Meow! Meow!

class Square {
  constructor(side) {
    this.side = side;
  }

  get area() {
    return this.side * this.side;
  }

  set area(value) {
    this.side = Math.sqrt(value);
  }
}

const square = new Square(4);
square.area = 100;
console.log(square.side);
















class Data {
  constructor(data) {
    this.data = data;
  }

  prepareData() {
    throw "This method should be overridden";
  }
}

class JSONData extends Data {
  constructor(data) {
    super(data);
  }
  prepareData() {
    return JSON.stringify(this.data);
  }
}

class CSVData extends Data {
  constructor(data) {
    super(data);
  }
  prepareData() {
    let csv = "";
    this.data.forEach((row) => {
      csv += row.join(",");
      csv += "\n";
    });
    return csv;
  }
}

class XMLData extends Data {
  constructor(data) {
    super(data);
  }
  prepareData() {
    let xml = "<root>";
    this.data.forEach((row) => {
      xml += "<row>";
      row.forEach((element) => {
        xml += `<element>${element}</element>`;
      });
      xml += "</row>";
    });
    xml += "</root>";
    return xml;
  }
}

function sendDataToServer(data) {
  const dataToSend = data.prepareData();
  console.log(dataToSend);
}

const jsonData = new JSONData({ key: "value", key2: "value2" });
const csvData = new CSVData([
  [1, 2, 3],
  [4, 5, 6],
]);
const xmlData = new XMLData([
  [1, 2, 3],
  [4, 5, 6],
]);
sendDataToServer(jsonData);
