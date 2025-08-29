class Shape {
  constructor(name) {
    this.name = name;
  }
  calculateArea() {
    return 0;
  }
}

class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }
  calculateArea() {
    return this.side * this.side;
  }
}
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}


const s1 = new Square("s1", 4);
console.log(s1.calculateArea());

const r1 = new Rectangle("r1", 4, 6);
console.log(r1.calculateArea());
