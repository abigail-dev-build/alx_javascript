#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12
  };
  function incr(obj) {
    obj.value += 1;
  }

  incr(myObject);
  