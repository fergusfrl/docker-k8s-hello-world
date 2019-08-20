const express = require('express');
const path = require('path');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname + '/blog.html'));
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`);
});
