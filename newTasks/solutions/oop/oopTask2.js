
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
getDetails(){
  return `Title: ${this.title}, Author:${this.author}, ISBN:${this.isbn}`;
}
}


class Member{
  constructor(name, memberId){
    this.name = name;
    this.memberId = memberId;
  }
  getDetails(){
    return {
      name: this.name,
      memmberId: this.memberId,
    };
  }
}


class Library{
  borrowers = []; 

  constructor(books,members){
    this.books = Array.isArray(books) ? books : [];
    this.members = Array.isArray(members) ? members : []; 
  }

  addBook(book){
    this.books.push(book);
  }
  addMember(member){
    this.members.push(member);
  }
  borrowBook(isbn,memberId){
    this.borrowers.push({isbn, memberId}) 
  }
  returnBook(isbn,memberId){
    const bookIndex = this.borrowers.findIndex(borrower => borrower.isbn === isbn && borrower.memberId === memberId)
    return this.borrowers.splice(bookIndex,1);
  }
  getBorrowedBooks(){
    const borrowedBooks = this.borrowers.map(borrower => {
      return {
        ...this.books.find(book => book.isbn === borrower.isbn),
        borrowedBy: borrower.memberId,

      }
    });
    return borrowedBooks; 
  }
  isBorrowed(isbn) {
    return Boolean(this.borrowers.find(borrower => borrower.isbn === isbn));
  }
  whoBorrowed(isbn){
    const borrower = this.borrowers.find(borrower => borrower.isbn === isbn);
    return this.members.find(member => member.memberId === borrower.memberId);
  }
}



const book1 = new Book('1984', 'George Orwell', '1234567890');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321');

const member1 = new Member('Alice', 'M123');
const member2 = new Member('Bob', 'M456');

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addMember(member1);
library.addMember(member2);

library.borrowBook('1234567890', 'M123');

const result1 = book1.getDetails();
// Ожидаемый результат: { "Title: 1984, Author: George Orwell, ISBN: 1234567890" }

const result2 = member1.getDetails();
// Ожидаемый результат: { "Name: Alice, MemberID: M123" }

const result3 = library.getBorrowedBooks();
// Ожидаемый результат: [{ title: '1984', author: 'George Orwell', isbn: '1234567890', borrowedBy: 'M123' }]
const result4 = library.isBorrowed('1234567890');
// Ожидаемый результат: true
const result5 = library.whoBorrowed('1234567890');
// Ожидаемый результат: { name: 'Alice', MemberID: 'M123' }

console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);
console.log('result4', result4);
console.log('result5', result5);