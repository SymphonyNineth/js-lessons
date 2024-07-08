const arr = [
  { name: "Vardan", age: 10 },
  { name: "Gago", age: 23 },
  { name: "John", salary: 20 },
  { name: "Jane", medals: 30 },
  { name: "Suren", medals: 4 },
  { name: "Siranush", medals: 12 },
];
const result = filterByPropertyValue(arr, "age", 15);
// Ожидаемый результат: [
  // { name: "Gago", age: 23 },
  // { name: "John", salary: 20 },
  // { name: "Jane", medals: 30 },
  // { name: "Suren", medals: 4 },
  // { name: "Siranush", medals: 12 },
// ]

const result2 = filterByPropertyValue(arr, "medals", 10);
// Ожидаемый результат: [
  // { name: "Vardan", age: 10 },
  // { name: "Gago", age: 23 },
  // { name: "John", salary: 20 },
  // { name: "Jane", medals: 30 },
  // { name: "Siranush", medals: 12 },
// ]


function filterByPropertyValue(ageArr, key, number) {
  return ageArr.filter((elem) => {
    return (!(key in elem) || elem[key] >= number);
  });
}
console.log(result);
console.log(result2)
