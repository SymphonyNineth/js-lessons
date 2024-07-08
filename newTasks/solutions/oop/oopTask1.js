class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`
  }
}

class Student extends Person{
  constructor(name,age,studentid){
    super(name,age);
    this.studentid = studentid;
  }
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentid}`
  }
}

class Teacher extends Person{
  constructor(name,age,subject){
    super(name,age);
    this.subject = subject;
  }
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`
  }
}

class Course{
  constructor(title, students){
    this.title = title;
    if(Array.isArray(students)){
    this.students = students;
  }else{
    this.students = [];
  }
  }
  addStudent(student){
    this.students.push(student)
  }
  getStudentList(){
    return this.students.map(student=>{
      return student.name
    })
  }

}





const student1 = new Student('John Doe', 20, 'S12345');
const student2 = new Student('Jane Smith', 22, 'S67890');
const teacher = new Teacher('Dr. Brown', 45, 'Mathematics');

const course = new Course('Algebra');
course.addStudent(student1);
course.addStudent(student2);

const result1 = student1.getDetails();
// Ожидаемый результат: "Name: John Doe, Age: 20, Student ID: S12345"

const result2 = teacher.getDetails();
// Ожидаемый результат: "Name: Dr. Brown, Age: 45, Subject: Mathematics"

const result3 = course.getStudentList();
// Ожидаемый результат: ["John Doe", "Jane Smith"]

console.log(result1);
console.log(result2);
console.log(result3);