class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        this.width = 0;
        this.height = 0;
      } else {
        this.width = w;
        this.height = h;
      }
    }
  
    print() {
      if (this.width === 0 || this.height === 0) {
        console.log("Empty Rectangle");
      } else {
        for (let i = 0; i < this.height; i++) {
          console.log("X".repeat(this.width));
        }
      }
    }
  
    rotate() {
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of the parent class (Rectangle) using super()
      super(size, size);
    }
  }
  
  // Example of creating an instance of the Rectangle class
//   const myRectangle = new Rectangle(5, 3);
  
  // Printing the original rectangle
//   console.log("Original Rectangle:");
//   myRectangle.print();
  
  // Rotating the rectangle
//   myRectangle.rotate();
//   console.log("\nAfter Rotating:");
//   myRectangle.print();
  
  // Doubling the dimensions of the rectangle
//   myRectangle.double();
//   console.log("\nAfter Doubling:");
//   myRectangle.print();
  
  // Example of creating an instance of the Square class
//   const mySquare = new Square(4);
  
  // Printing the square
//   console.log("\nSquare:");
//   mySquare.print();
  