import express from 'express';
import personsRoutes from './src/routes/persons.js';
import indexRoutes from './src/routes/index.js';

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Mount routes
app.use('/', indexRoutes);      // Homepage routes
app.use('/persons', personsRoutes); // Person-related routes

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
