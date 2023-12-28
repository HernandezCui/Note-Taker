const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log('Server listening on port: ${PORT}'));