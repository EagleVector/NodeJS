const { person, Details } = require('./hello');

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// module.exports = {add, subtract, multiply, divide};

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;

console.log(`Hi ${person.name}! You are ${person.age} years old`);

const emp1 = new Details('Cherry', 'Software Dev');

emp1.greeting();

console.log(__dirname, __filename);