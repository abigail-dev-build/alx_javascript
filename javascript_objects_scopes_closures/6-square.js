#!/usr/bin/node

const SSquare = require ('./5-square');
  
  class Square extends SSquare {
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
  
  module.exports = Square;
  