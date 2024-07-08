const arr = [1, 2, 3, 4];
const result = factorialArray(arr);
// Ожидаемый результат: [1, 2, 6, 24]

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorialArray(nums) {
  return nums.map(factorial);
}
console.log(factorialArray(arr));
