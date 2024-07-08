const obj = { a: 1, b: 2, c: 3 };
const keys = ["a", "c"];
const result = filterKeys(obj, keys);
// Ожидаемый результат: { a: 1, c: 3 }

function filterKeys(object, keys) {
  let finalObj = {};
  keys.forEach((elem) => {
    if (elem in object) {
      finalObj[elem] = object[elem];
    }
  });
  return finalObj;
}
console.log(result);
