const userName = "Vardan";
const age = 3;

console.log(userName);
sayHi();
console.log(calculateSquare());
// sayHowAreYou();
// sayBye();
// console.log(age);

function sayHi() {
  console.log("HI");
}

const sayBye = () => console.log("Bye");

const sayHowAreYou = function () {
  console.log("How are You");
};

function calculateSquare() {
  //   console.log(age);
  const width = 2;
  const length = 5;
  const square = width * length;
  return square;
}
