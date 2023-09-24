#!/usr/bin/node
function executeXTimes(x, functionToCall) {
    for (let i = 0; i < x; i++) {
      functionToCall();
    }
  }

  function sayHello() {
    console.log("Where I am!");
  }
  