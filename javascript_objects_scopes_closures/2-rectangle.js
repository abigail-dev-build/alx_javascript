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
  }
  
  // Example of creating instances of the Rectangle class
//   const validRectangle = new Rectangle(5, 10);
//   const invalidRectangle = new Rectangle(0, 8);
  