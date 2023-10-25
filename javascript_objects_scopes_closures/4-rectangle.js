#!/usr/bin/node
class Rectangle {
    constructor (w, h) {
        if (w && h > 0) {
            this.width = w;
            this.height = h;
        }else {
            return 'Rectangle {}';
        }
    }
  
    print() {
        for (let i = 0; i < this.height; i++) {
          console.log("X".repeat(this.width));
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
  
module.exports = Rectangle;
  