class CustomArray {
  constructor(defaultValues = []) {
    this.values = defaultValues;
  }

  map(cb) {
    const resultArr = [];
    for(let i = 0; i < this.values.length; i++) {
      resultArr.push(cb(this.values[i], i, this.values));
    }
    return resultArr;
  }

  find(cb) {
    for (let i = 0; i < this.values.length; i++) {
      if(cb(this.values[i], i, this.values)) {
        return this.values[i];
      }
    }
  }

  findIndex(cb) {
    for (let i = 0; i < this.values.length; i++) {
      if(cb(this.values[i], i, this.values)) {
        return i
      }
    }
    return -1;
  }

  filter(cb) {
    const result = [];

    for(let i = 0; i < this.values.length; i++) {
      if(cb(this.values[i], i, this.values)) {
        result.push(this.values[i]);
      }
    }
    return result;
  }

  push(item) {
   return this.values.push(item)
  }

  pop(){
    return this.values.pop();
  }

  get(index) {
    return this.values[index];
  }
}

const arr = new CustomArray(); 
arr.push(1);
arr.push(2);
arr.push(3);
const result1 = arr.get(1); // Ожидаемый результат: 2
arr.pop();
const result2 = arr.get(2); // Ожидаемый результат: undefined