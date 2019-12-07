"use strict";
const x = require('./data.js');
let data = x.data;
function calculateFuel(masses) {
    let fuelPerMass = [];
    for (let mass of masses) {
        // fuelPerMass.push (Math.floor (mass / 3 - 2));
        fuelPerMass = [...fuelPerMass, Math.floor(mass / 3 - 2)];
    }
    const total = fuelPerMass.reduce((a, b) => a + b);
    console.log(total);
}
calculateFuel(data);
