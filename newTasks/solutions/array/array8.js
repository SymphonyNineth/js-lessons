const arr = [1, 2, 3, 4];
const result = cumulativeSum(arr);
// Ожидаемый результат: [1, 3, 6, 10]

function cumulativeSum(nums){
  let result = [];
  let sum = 0;
  nums.forEach(elem => {
    sum += elem;
    return result.push(sum);
  });

  return result;
}

console.log(result)