const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const result = fetchDataFromDatabase();
      res.send(result);
    } catch (error) {
      // The error is now properly handled and will be passed to the error handling middleware
      next(error);
    }
  }, 1000);
});

function fetchDataFromDatabase() {
  if (Math.random() < 0.5) {
    throw new Error('Database error!');
  }
  return { message: 'Data fetched successfully' };
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));