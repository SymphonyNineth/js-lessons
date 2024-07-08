
class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height; 
  }
  getArea(){
    return this.width*this.height;
  }
}

const rect = new Rectangle(10, 5);
const result = rect.getArea();
// Ожидаемый результат: 50