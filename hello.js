// console.log(alert('hi'));
// console.log(window);

// console.log('Hi There! JS');

// const math = require('./math');

// console.log(math.add(2, 5));
// console.log(math.subtract(2, 5));
// console.log(math.multiply(2, 5));
// console.log(math.divide(5, 2));
// console.log(math);

// const { add, subtract, multiply, divide } = require('./math');

// console.log(add(2, 5));
// console.log(subtract(2, 5));
// console.log(multiply(2, 5));
// console.log(divide(5, 2));
// console.log(math);

// const math = require('./math');

// console.log(math.add(2, 5));
// console.log(math.sub(4, 1));

const person = {
  name: "Cherry",
  age: 26
};

class Details {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  greeting() {
    console.log(`Hi ${this.name}! You have been promoted to ${this.role}`);
  }
}

module.exports = { person,
  Details };