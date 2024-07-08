const arr = [{ name: "apple" }, { name: "banana" }, { name: "kiwi" }];
const result = addLengthProperty(arr, "name");
// Ожидаемый результат: [{ name: 'apple', length: 5 }, { name: 'banana', length: 6 }, { name: 'kiwi', length: 4 }]

function addLengthProperty(objectsArr) {
  return objectsArr.map((elem) => {
    return {
      name: elem.name,
      length: elem.name.length,
    };
  });
}

console.log(result);
