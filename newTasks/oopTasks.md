### Задача 1: Система управления банком

**Описание системы:**
Создайте систему управления банком, которая включает следующие классы:

1. **Account**: базовый класс с полями `accountNumber`, `balance`. Методы `deposit(amount)`, `withdraw(amount)`, `getBalance()`.
2. **SavingsAccount**: класс, наследующий `Account`, с дополнительным полем `interestRate`. Метод `addInterest()`, который добавляет проценты к балансу.
3. **CheckingAccount**: класс, наследующий `Account`, с дополнительным полем `overdraftLimit`. Метод `withdraw(amount)`, который учитывает овердрафт.

**Пример для проверки:**

```javascript
const savings = new SavingsAccount('123456', 1000, 0.05);
savings.deposit(500);
savings.addInterest();
const result1 = savings.getBalance(); // Ожидаемый результат: 1575

const checking = new CheckingAccount('654321', 500, 200);
checking.withdraw(600);
const result2 = checking.getBalance(); // Ожидаемый результат: -100

const result3 = checking.withdraw(200); // Ожидаемый результат: "Withdrawal denied: insufficient funds."
```

---

### Задача 2: Система управления онлайн-курсом

**Описание системы:**
Создайте систему управления онлайн-курсом, которая включает следующие классы:

1. **User**: базовый класс с полями `username`, `email`. Метод `getDetails()`, который возвращает строку с информацией о пользователе.
2. **Student**: класс, наследующий `User`, с дополнительным полем `studentId`. Метод `enroll(course)`, который добавляет курс в список курсов студента.
3. **Instructor**: класс, наследующий `User`, с дополнительным полем `instructorId`. Метод `addCourse(course)`, который добавляет курс в список курсов преподавателя.
4. **Course**: класс с полями `courseTitle`, `students` (массив объектов студентов). Методы `addStudent(student)`, `getStudentList()`.

**Пример для проверки:**

```javascript
const course = new Course('JavaScript 101');
const student = new Student('john_doe', 'john@example.com', 'S123');
const instructor = new Instructor('dr_smith', 'smith@example.com', 'I456');

student.enroll(course);
course.addStudent(student);
instructor.addCourse(course);

const result1 = student.getDetails(); 
// Ожидаемый результат: "Username: john_doe, Email: john@example.com, Student ID: S123"

const result2 = instructor.getDetails(); 
// Ожидаемый результат: "Username: dr_smith, Email: smith@example.com, Instructor ID: I456"

const result3 = course.getStudentList(); 
// Ожидаемый результат: ["john_doe"]
```

Конечно, вот еще одна задача, где нужно создать более сложную систему с использованием ООП:

### Задача 3: Система управления зоопарком

**Описание системы:**
Создайте систему управления зоопарком, которая включает следующие классы:

1. **Animal**: базовый класс с полями `name`, `species`, `age`. Метод `getDetails()`, который возвращает строку с информацией о животном.
2. **Mammal**: класс, наследующий `Animal`, с дополнительным полем `isAquatic`. Метод `getDetails()` должен быть переопределен для включения `isAquatic`.
3. **Bird**: класс, наследующий `Animal`, с дополнительным полем `canFly`. Метод `getDetails()` должен быть переопределен для включения `canFly`.
4. **Enclosure**: класс с полями `name`, `capacity`, `animals` (массив объектов животных). Методы `addAnimal(animal)`, `removeAnimal(animal)`, `getAnimalList()`.
5. **Zookeeper**: класс с полями `name`, `employeeId`, `assignedEnclosures` (массив объектов вольеров). Методы `assignEnclosure(enclosure)`, `unassignEnclosure(enclosure)`, `feedAnimals()`, который возвращает строку с именами всех животных в вольерах, за которые отвечает этот смотритель.
6. **Zoo**: класс с полями `name`, `enclosures` (массив объектов вольеров), `zookeepers` (массив объектов смотрителей). Методы `addEnclosure(enclosure)`, `removeEnclosure(enclosure)`, `hireZookeeper(zookeeper)`, `fireZookeeper(zookeeper)`, `getEnclosureList()`, `getZookeeperList()`.

**Пример для проверки:**

```javascript
const zoo = new Zoo('Happy Animal Zoo');

const mammal = new Mammal('Lion', 'Panthera leo', 5, false);
const bird = new Bird('Eagle', 'Aquila', 3, true);

const enclosure1 = new Enclosure('Savannah', 5);
const enclosure2 = new Enclosure('Birds Paradise', 10);

const zookeeper1 = new Zookeeper('John Smith', 'Z001');
const zookeeper2 = new Zookeeper('Jane Doe', 'Z002');

zoo.addEnclosure(enclosure1);
zoo.addEnclosure(enclosure2);

enclosure1.addAnimal(mammal);
enclosure2.addAnimal(bird);

zoo.hireZookeeper(zookeeper1);
zoo.hireZookeeper(zookeeper2);

zookeeper1.assignEnclosure(enclosure1);
zookeeper2.assignEnclosure(enclosure2);

const result1 = mammal.getDetails();
// Ожидаемый результат: "Name: Lion, Species: Panthera leo, Age: 5, Is Aquatic: false"

const result2 = bird.getDetails();
// Ожидаемый результат: "Name: Eagle, Species: Aquila, Age: 3, Can Fly: true"

const result3 = enclosure1.getAnimalList();
// Ожидаемый результат: ["Lion"]

const result4 = zookeeper1.feedAnimals();
// Ожидаемый результат: "John Smith fed: Lion"

const result5 = zoo.getEnclosureList();
// Ожидаемый результат: ["Savannah", "Birds Paradise"]

const result6 = zoo.getZookeeperList();
// Ожидаемый результат: ["John Smith", "Jane Doe"]
```
