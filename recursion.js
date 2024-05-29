function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("N should be a positive integer");
  }
  // Բազային դեպք(base case). եթե n-ը 0 է կամ 1, վերադարձրեք 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n-1)
  const nMinus1Factorial = factorial(n - 1);
  return n * nMinus1Factorial;
}

console.log(factorial(5)); // 120

// Write a recursive function that calculates the sum of all numbers from 1 to n
function sum(n) {
  // Write your code here
}
// Write a recursive function that calculates the power(Աստիճան) of a number (a^b)

function power(a, b) {
  // Write your code here
}

//  Read more about recursion in learn.javascript.ru: https://learn.javascript.ru/recursion
