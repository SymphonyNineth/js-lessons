const obj = { a: 1, b: 2, c: 1, d: 3 };
const result = getUniqueValues2(obj);
// Ожидаемый результат: [ 1, 2, 3 ]

function getUniqueValues(object) {
  const resultArr = [];
  for (let i in object) {
    if (!resultArr.includes(object[i])) {
      resultArr.push(object[i]);
    }
  }
  return resultArr;
}
function getUniqueValues2(object) {
  const resultMap = new Set();
  for (let i in object) {
    resultMap.add(object[i]);
  }
  // return [...resultMap]
  return Array.from(resultMap);
}
console.log(result);
