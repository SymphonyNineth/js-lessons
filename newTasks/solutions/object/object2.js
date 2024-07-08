const obj = { a: 1, b: 2, c: 3 };
const result = toArrayOfObjects(obj);
// Ожидаемый результат: [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } ]

function toArrayOfObjects(object) {
  let array = [];
  for (let i in object) {
    array.push({
      key: i,
      value: object[i],
    });
  }
  return array;
}
console.log(result);
