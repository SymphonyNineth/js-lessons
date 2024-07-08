const arr = [{ type: 'fruit' }, { type: 'vegetable' }, { type: 'fruit' }];
const result = getUniquePropertyValues(arr, 'type');
// Ожидаемый результат: ['fruit', 'vegetable']


function getUniquePropertyValues(products, key){
  const resultArr = [];
  products.forEach(element => {
    if(!resultArr.includes(element[key])){
      resultArr.push(element[key]);
    }    
  });
  return resultArr;
}


console.log(result)