const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// JSON & Parse URL encoded
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Host public folder 
app.use(express.static('public'));

// api routes
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});