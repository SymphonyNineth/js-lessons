console.log(1);
const logResult = (result) => console.log(result);

const somePromise = new Promise((resolve) => {
  resolve(2)
  console.log(3);
}).then(console.log)

console.log(5);
console.log(4);

// And -> 1, 4, 3, 2 - Սխալ
// Anzhela -> 1 3 4 2 - Ճիշտ
  