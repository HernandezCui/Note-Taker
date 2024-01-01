const express = require('express');
const apiRoutes = require('./routes/apiRoutes/index.js');
const htmlRoutes = require('./routes/htmlRoutes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start Server 
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

