const express = require('express');
const postRoutes = require('./postRoutes');

const port = 5000
const server = express();

server.use(postRoutes);

server.get('/', (req, res) =>
    res.send('Api is running!')
);

server.listen(port, () => console.log(`Server is running on port ${port}`));