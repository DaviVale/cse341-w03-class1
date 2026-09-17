const express = require('express');
const mongodb = require('./data-base/connect');
const app = express();
const port = process.env.PORT || 8080;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Creates an interactive Swagger documentation page at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  // Reads the "name" query parameter from the URL
  const name = req.query.name;

  // Returns a greeting using the provided name
  res.send(`Hello ${name}`);
});

// Starts the server only after the MongoDB connection is established
mongodb.initDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});