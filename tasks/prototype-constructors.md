Конечно! Вот список из 10 задач на прототипы и функции-конструкторы в JavaScript. Каждая задача содержит исходный код, который нужно доработать или изменить.

### Задача 1: Создание функции-конструктора

**Задание**: Создайте функцию-конструктор `Person`, которая принимает параметры `name` и `age`.

```javascript
// Создайте функцию-конструктор Person
function Person(name, age) {
  // Ваш код здесь
}

// Пример использования:
const person1 = new Person("Alice", 25);
console.log(person1.name); // Ожидаемый результат: Alice
console.log(person1.age); // Ожидаемый результат: 25
```

### Задача 2: Добавление методов в прототип

**Задание**: Добавьте метод `greet` в прототип функции-конструктора `Person`, который выводит сообщение "Hello, my name is [name]".

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Добавьте метод greet в прототип
Person.prototype.greet = function () {
  // Ваш код здесь
};

// Пример использования:
const person2 = new Person("Bob", 30);
person2.greet(); // Ожидаемый результат: Hello, my name is Bob
```

### Задача 3: Создание наследника

**Задание**: Создайте функцию-конструктор `Student`, которая наследует от `Person` и добавьте ей параметр `course`.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

// Создайте функцию-конструктор Student, наследующую от Person
function Student(name, age, course) {
  // Ваш код здесь
}

// Пример использования:
const student1 = new Student("Charlie", 20, "Math");
student1.greet(); // Ожидаемый результат: Hello, my name is Charlie
console.log(student1.course); // Ожидаемый результат: Math
```

### Задача 4: Переопределение методов

**Задание**: Переопределите метод `greet` в `Student` так, чтобы он выводил сообщение "Hello, my name is [name] and I am studying [course]".

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

function Student(name, age, course) {
  Person.call(this, name, age);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Переопределите метод greet
Student.prototype.greet = function () {
  // Ваш код здесь
};

// Пример использования:
const student2 = new Student("Dave", 22, "Physics");
student2.greet(); // Ожидаемый результат: Hello, my name is Dave and I am studying Physics
```

### Задача 5: Добавление нового метода в прототип

**Задание**: Добавьте метод `study` в прототип функции-конструктора `Student`, который выводит сообщение "[name] is studying [course]".

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

function Student(name, age, course) {
  Person.call(this, name, age);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Добавьте метод study в прототип Student
Student.prototype.study = function () {
  // Ваш код здесь
};

// Пример использования:
const student3 = new Student("Eve", 21, "Chemistry");
student3.study(); // Ожидаемый результат: Eve is studying Chemistry
```

### Задача 6: Проверка принадлежности к классу

**Задание**: Создайте метод `isStudent` в `Person`, который возвращает `true`, если объект является экземпляром `Student`.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

Person.prototype.isStudent = function () {
  // Ваш код здесь
};

function Student(name, age, course) {
  Person.call(this, name, age);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const person3 = new Person("Frank", 28);
const student4 = new Student("Grace", 23, "Biology");

console.log(person3.isStudent()); // Ожидаемый результат: false
console.log(student4.isStudent()); // Ожидаемый результат: true
```

### Задача 7: Статический метод

**Задание**: Добавьте статический метод `isPerson` в `Person`, который проверяет, является ли переданный объект экземпляром `Person`.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

// Добавьте статический метод isPerson
Person.isPerson = function (obj) {
  // Ваш код здесь
};

function Student(name, age, course) {
  Person.call(this, name, age);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const person4 = new Person("Hannah", 35);
const student5 = new Student("Ian", 19, "History");

console.log(Person.isPerson(person4)); // Ожидаемый результат: true
console.log(Person.isPerson(student5)); // Ожидаемый результат: true
console.log(Person.isPerson({})); // Ожидаемый результат: false
```

### Задача 8: Использование `Object.create`

**Задание**: Создайте объект `teacher`, который наследует от объекта `person`.

```javascript
const person = {
  name: "John",
  age: 40,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

// Создайте объект teacher, наследующий от person
const teacher = Object.create(person);

// Пример использования:
teacher.name = "Kate";
teacher.subject = "Math";
teacher.greet(); // Ожидаемый результат: Hello, my name is Kate
console.log(teacher.subject); // Ожидаемый результат: Math
```

### Задача 9: Множественное наследование через миксины

**Задание**: Создайте объект `canTeach` с методом `teach`, и смешайте его в объект `teacher`.

```javascript
const person = {
  name: "John",
  age: 40,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
};

const canTeach = {
  teach() {
    console.log(this.name + " is teaching " + this.subject);
  },
};

const teacher = Object.create(person);
teacher.name = "Kate";
teacher.subject = "Math";

// Смешайте canTeach в teacher
Object.assign(teacher, canTeach);

// Пример использования:
teacher.greet(); // Ожидаемый результат: Hello, my name is Kate
teacher.teach(); // Ожидаемый результат: Kate is teaching Math
```

### Задача 10: Инкапсуляция через замыкания

**Задание**: Создайте функцию-конструктор `Counter`, которая инкапсулирует переменную `count` и предоставляет методы `increment` и `getValue`.

```javascript
// Создайте функцию-конструктор Counter
function Counter() {
  let count = 0;

  this.increment = function () {
    // Ваш код здесь
  };

  this.getValue = function () {
    // Ваш код здесь
  };
}

// Пример использования:
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Ожидаемый результат: 2
```

Эти задачи помогут вам лучше понять и закрепить навыки работы с прототипами и функциями-конструкторами в JavaScript.
