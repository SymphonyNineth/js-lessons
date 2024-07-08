const obj = { a: 1, b: 2, c: 3 };
const result = invertObject(obj);
// Ожидаемый результат: { 1: 'a', 2: 'b', 3: 'c' }

function invertObject(object){
  let newObj = {};
  for(let i in object){
    newObj[object[i]]= i;
  
  }
  return newObj;

}
console.log(result)