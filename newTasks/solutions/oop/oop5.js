class Vehicle{
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make,model,year){
    super(make,model);
    this.year = year;
  }
}


const car = new Car('Toyota', 'Camry', 2020);
const result = car.model;
// Ожидаемый результат: "Camry"