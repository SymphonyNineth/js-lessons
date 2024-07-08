const arr = [
  { category: "fruit", name: "apple" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "banana" },
  { category: "fruit", name: "pineapple" },
];
const result = groupBy(arr, "category");
// Ожидаемый результат: { fruit: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }], vegetable: [{ category: 'vegetable', name: 'carrot' }] }

function groupBy(arr, key) {
  const resultObj = {};
  arr.forEach(element => {
    if(!resultObj[element.category]){
      resultObj[element.category] = [element];
    }else{
      resultObj[element.category].push(element);
    }
  });
  return resultObj;

}
console.log(result);
