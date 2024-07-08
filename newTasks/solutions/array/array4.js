function countOccurrences(numbers) {
  let obj = {};
  // {
    // 1:1
  // }
  numbers.forEach(number => {
    if(number in obj){
      obj[number]++
    } else{
      obj[number]=1;
    }
  });
  return obj
}

const arr = [1, 1, 2, 3, 3, 3];
const result = countOccurrences(arr);
// Ожидаемый результат: {1: 2, 2: 1, 3: 3}

console.log(result)