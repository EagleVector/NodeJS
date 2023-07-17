const os = require("os");
const { uptime } = require("process");

// PlatForm 
console.log(os.platform());

// CPU Arch
console.log(os.arch);

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memoru
console.log(os.totalmem());

// Home Dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());