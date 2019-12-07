const x = require('./data.js');
let data: number[] = x.data;

function calculateFuel(masses: number[]) {
  let fuelPerMass: number[] = [];

  for (let mass of masses) {
    // fuelPerMass.push (Math.floor (mass / 3 - 2));
    fuelPerMass = [...fuelPerMass, Math.floor(mass / 3 - 2)];
  }
  const total: number = fuelPerMass.reduce((a, b) => a + b);
  console.log(total);
}

calculateFuel(data);
