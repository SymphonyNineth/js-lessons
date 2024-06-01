// Getting items by ID
const button = document.getElementById("getPosts");
const calculateFactorial = document.getElementById("calculate");
const shoppingList = document.getElementById("list");

// const recursiveFactorial = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * recursiveFactorial(n - 1);
//   }
// };

// calculateFactorial.addEventListener("click", () => {
//   for (let i = 0; i < 6_000_000; i++) {
//     recursiveFactorial(100);
//   }
// });

// Creating a new element
const newItem = document.createElement("li");

// Adding text to the new element
newItem.innerText = "Pineapple";

// Appending the new element to the shopping list
shoppingList.appendChild(newItem);

console.log(newItem);

const input = document.getElementById("input");
const addItemButton = document.getElementById("add");

addItemButton.addEventListener("click", () => {
  const newElementText = input.value;
  const newElement = document.createElement("li");
  newElement.innerText = newElementText;
  shoppingList.appendChild(newElement);
  input.value = "";
});

// https://www.youtube.com/watch?v=yp5Cj36g5Uw
