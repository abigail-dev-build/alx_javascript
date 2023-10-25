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
  
    charPrint(c) {
      // If c is undefined, use the character X
      const char = c || 'X';
  
      if (this.width === 0 || this.height === 0) {
        console.log("Empty Square");
      } else {
        for (let i = 0; i < this.height; i++) {
          console.log(char.repeat(this.width));
        }
      }
    }
  }
  
  // Example of creating an instance of the Square class
//   const mySquare = new Square(4);
  
  // Printing the square using default character X
//   console.log("Square:");
//   mySquare.charPrint();
  
  // Printing the square using custom character #
//   console.log("\nSquare with Custom Character:");
//   mySquare.charPrint('#');
  