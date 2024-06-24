class User {
  constructor(name, comments) {
    this.name = name;
    this.comments = comments;
  }

  // getComments() {
  //   return this.comments.map(function (comment) {
  //     return {
  //       comment,
  //       name: this.name,
  //     };
  //   });
  // }

  // getComments() {
  //   return this.comments.map((comment) => {
  //     return {
  //       comment,
  //       name: this.name,
  //     };
  //   });
  // }
}

const user = new User("John", [
  "Very good",
  "Very bad",
  "Fuck off",
  "nikol varchapet",
]);

// const getUserComments = user.getComments;

// // console.log(user.getComments());
// console.log(getUserComments());'

console.log(user.getComments());

