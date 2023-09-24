#!/usr/bin/node
function incrementAndCall(number, functionToCall) {
    const incrementedNumber = number + 1;
    functionToCall(incrementedNumber);
  }
//   function displayNumber(num) {
//     console.log("Number:", num);
//   }
  
//   incrementAndCall(5, displayNumber); // This will call displayNumber(6)
  