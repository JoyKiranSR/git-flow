const { signup } = require("./auth/signup");

console.log('Index working');

// signup call
console.log("Signing a new user...");
console.log(signup({name: "Joy", email: "joy@gmail.com", pass: "1234"}));
