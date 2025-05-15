// Import the built-in 'fs' module to enable file system operations like writing to a file
const fs = require('fs');

// Create an empty array to store the result
const result = [];

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) 
{
  // If the number is divisible by both 3 and 5 (i.e., divisible by 15), push "BIGBANG"
  if (i % 3 === 0 && i % 5 === 0) 
  {
    result.push("BIGBANG");
  } 
  // If the number is divisible by only 3, push "BIG"
  else if (i % 3 === 0) 
  {
    result.push("BIG");
  } 
  // If the number is divisible by only 5, push "BANG"
  else if (i % 5 === 0) 
  {
    result.push("BANG");
  } 
  // If the number is not divisible by 3 or 5, push the number as a string
  else 
  {
    result.push(i.toString());
  }
}

// Check if 'output.json' already exists
const filePath = 'output.json';

if (fs.existsSync(filePath)) 
{
  console.log("output.json already exists. Deleting the old file...");
  fs.unlinkSync(filePath); // Delete existing file
}

// Convert the result array to JSON format and write it to a file named 'output.json'
fs.writeFileSync('output.json', JSON.stringify(result, null, 2));

// Print a message to the console to indicate the file has been created
console.log('output.json has been created!');
