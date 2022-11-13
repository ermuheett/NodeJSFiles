
const fs = require('fs');

fs.writeFileSync("Hello.txt","This is my test File");

console.log("File has been created successfully..!!!");

console.log ("the Directory Name is Given by " + __dirname);
console.log ("the File Name is Given by " + __filename);