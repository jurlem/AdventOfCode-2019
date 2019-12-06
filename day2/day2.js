'use strict';
const x = require ('./data.js');
let data = x.data;

//stateBeforeFire
data[1] = 12;
data[2] = 2;

function findFirstposition (input) {
  for (let i = 0; i < input.length; i += 4) {
    let positionOfFirst = input[i + 1];
    let positionOfSecond = input[i + 2];
    let positionOfCalc = input[i + 3];

    if (input[i] === 1) {
      const sum = input[positionOfFirst] + input[positionOfSecond];
      input[positionOfCalc] = sum;
    } else if (input[i] === 2) {
      const multiply = input[positionOfFirst] * input[positionOfSecond];
      input[positionOfCalc] = multiply;
    } else if (input[i] == 99) {
      break;
    } else if (input[i] != 99 || 1 || 2) {
      console.log ('error in opcode!');
    }
  }
  return input[0];
}
console.log (findFirstposition (data));
//  3654868
