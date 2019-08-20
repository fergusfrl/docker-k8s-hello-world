const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/blog.html');
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`);
});
