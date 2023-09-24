#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
  };
  function incr(obj) {
    obj.value += 1;
    // myObject.value++;
  }

  for (let i = 0; i < 100; i++) {
    incr();
    // console.log(myObject);
  }
  