const obj = { a: 1, b: 'string', c: 3, arr: [1,2,3] };
const result = incrementNumbers(obj);
// Ожидаемый результат: { a: 2, b: 'string', c: 4 }

function incrementNumbers(object){
  
  for(let i in object){
    if(typeof object[i] === "number"){
      object[i]++;
    }
  }
  return object;
}

console.log(result);