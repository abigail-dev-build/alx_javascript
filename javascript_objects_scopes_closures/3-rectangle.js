#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If w or h is 0 or not a positive integer, create an empty object
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
  }
  
  // Example of creating instances of the Rectangle class
//   const validRectangle = new Rectangle(5, 3);
//   const invalidRectangle = new Rectangle(0, 8);
  
  // Printing rectangles
//   console.log("Valid Rectangle:");
//   validRectangle.print();
  
//   console.log("\nInvalid Rectangle:");
//   invalidRectangle.print();
  