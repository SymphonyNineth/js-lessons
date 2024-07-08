class Circle{
  constructor(rad){
    this.rad = rad;
  }
  getCircumference(){
    return 6.283 * this.rad;
  }
}

const circle = new Circle(7);
const result = circle.getCircumference();
// Ожидаемый результат: 43.98 (примерно)