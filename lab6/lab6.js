class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log("perimeter of", this.name, this.sideLength * this.sides);
    // return this.sideLength * this.sides;
  }
}
console.log("part1");
const square = new Shape("square", 4, 5);
square.calcPerimeter();
const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    console.log("Area", this.sideLength * this.sideLength);
  }
}
console.log("part2");
const square1 = new Square(5);
square1.calcArea();
square1.calcPerimeter();

// ! obj in protoType
function Shape1(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}
Shape1.prototype.calcPerimeter = function () {
  console.log("perimeter of", this.name, this.sideLength * this.sides);
};

console.log("part1 protoType");
const square2 = new Shape1("square", 4, 5);
square.calcPerimeter();
const triangle2 = new Shape1("triangle", 3, 3);
triangle.calcPerimeter();

function Square1(sideLength) {
  Shape1.call(this, "square", 4, sideLength);
}

Square1.prototype.calcArea = function () {
  console.log("Area", this.sideLength * this.sideLength);
};

console.log("part2 protoType");
const square_proto = new Square1(5);
square_proto.calcArea();

//!

class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "square the triple of any number you provide";
  static calculate(n = 1) {
    return Triple.calculate * Triple.calculate;
  }
}
console.log("part 3");

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18
console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName);
