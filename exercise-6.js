class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
    static calculateSquare (square) {
    return square.side * square.side;
  }

  static calculateRectangle (rectangle) {
    return rectangle.width * rectangle.height
  }

  static calculateCircle (circle) {
    return Math.PI * Math.pow(circle.radius, 2);
    //return Math.PI * circle.radius * circle.radius;
    //return Math.PI * circle.radius ** 2;
  }
}



const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculateSquare(square));
console.log(AreaCalculator.calculateRectangle(rectangle));
console.log(AreaCalculator.calculateCircle(circle));

console.log(square instanceof Square);
console.log(rectangle instanceof Rectangle);
console.log(circle instanceof Circle);

// Tramite instanceof possiamo sapere se un ogetto un istanza della classa