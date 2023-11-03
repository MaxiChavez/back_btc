// Practica process.argv

console.log("The process is:  ", process.pid);
console.log("The version of node: ", process.versions.node);
console.log("Command line arguments", process.argv);
const [, , firstname, lastname] = process.argv;
console.log(`your name is ${firstname} ${lastname}`);
