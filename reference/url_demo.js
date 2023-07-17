const url = require("url");

const myURL = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

//Serialized URL
console.log(myURL.href);
console.log(myURL.toString());
// Host(root domain)
console.log(myURL.host);
// HostName(doesnot include port)
console.log(myURL.hostname);
// Path name
console.log(myURL.pathname);

// Serialized query
console.log(myURL.search);

// Params object
console.log(myURL.searchParams);

// Add params
myURL.searchParams.append('abc', '1234');
console.log(myURL.searchParams);

// Loop through params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));