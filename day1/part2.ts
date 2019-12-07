const y = require('./data.js');
let input: number[] = y.data;

function calcFuel(masses: number[]) {
  const fuels = [];
  let fuelPerMass: number[] = [];

  for (let mass of masses) {
    // fuelPerMass.push (Math.floor (mass / 3 - 2));
    fuelPerMass = [...fuelPerMass, Math.floor(mass / 3 - 2)];

    let last: number = fuelPerMass[fuelPerMass.length - 1];

    if (last > 6) {
      // fuelPerMass.push(Math.floor(last / 3 - 2));
      fuelPerMass = [...fuelPerMass, Math.floor(last / 3 - 2)];
    }

    const massTotal: number = fuelPerMass.reduce((a, b) => a + b);
    fuels.push(massTotal);
    fuelPerMass = [];
  }

  console.log(fuels.reduce((a, b) => a + b));
}
calcFuel(input);
//4632998
