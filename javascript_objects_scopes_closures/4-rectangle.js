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
  
    rotate() {
      // Exchange the width and height of the rectangle
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Multiply the width and height of the rectangle by 2
      this.width *= 2;
      this.height *= 2;
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
  