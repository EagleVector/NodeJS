const fs = require("fs");
const path = require("path");

// Create Folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file

// fs.writeFile
//   (path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log('File Written...');
//   }
// );

// fs.appendFile
//   (path.join(__dirname, '/test', 'hello.txt'),
//   'I love this world of NodeJS!',
//   err => {
//     if (err) throw err;
//     console.log('File Written...');
//   }
// );

// Read File

// fs.readFile
//   (path.join(__dirname, '/test', 'hello.txt'),
//   'utf8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

fs.rename
  (path.join(__dirname, '/test', 'helloWorld.txt'),
  path.join(__dirname, '/test', 'NewName.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed...');
  }
);