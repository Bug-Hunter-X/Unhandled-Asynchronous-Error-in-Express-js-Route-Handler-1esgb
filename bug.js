const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This will throw an error if something is wrong with the database or external service
    // If the error is caught, it will not reach the res.send()
    const result = fetchDataFromDatabase(); 
    res.send(result);
  }, 1000);
});

function fetchDataFromDatabase() {
  // Simulate a database error
  if (Math.random() < 0.5) {
    throw new Error('Database error!');
  }
  return { message: 'Data fetched successfully' };
}