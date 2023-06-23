const fs = require("fs");
const os = require("os");

// Synchronous call
// fs.writeFileSync('./test.txt', 'Hey There Cherry! What up?');

//Asynchronous call
// fs.writeFile('./test.txt', 'hi! there Cherry', (err) => {});

//Sync call - it will return the result
// const result = fs.readFileSync('./contacts.txt', "utf-8");
// console.log(result);

// Async call - it wont return the result. 
// It will always expect a callback.

// const result = fs.readFile('./contacts.txt', "utf-8");
// console.log(result);

// fs.readFile('./contacts.txt', "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

// fs.cpSync('./test.txt', './copy.txt');

// fs.unlinkSync('./copy.txt');

// console.log(fs.statSync('./test.txt'));

// Blocking... request

console.log(1);
const result = fs.readFileSync('contacts.txt', 'utf-8');
console.log(result);
console.log(2);


console.log('----------------------------------------');

// Non-Blocking... request

console.log(1);
const results = fs.readFile('contacts.txt', 'utf-8', (err, res) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(res);
  }
});
console.log(2);

console.log('------------------------');

// Default Thread Pool count - 4
// Total thread size - no. of cores * 4

console.log(os.cpus().length);