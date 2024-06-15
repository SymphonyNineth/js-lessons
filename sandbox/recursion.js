function factorial(n) {
  if (n < 0) {
    throw new Error("number should be a positive integer");
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
