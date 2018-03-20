const fs = require('fs');
const data = fs.readFileSync('data.json'); 
console.log("data-->", data);
console.log("en-of-file");