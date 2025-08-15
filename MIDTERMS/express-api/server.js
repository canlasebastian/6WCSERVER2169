const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    rep.json({message: 'This is JSON data', time: new Date() });
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.json ({
        message: `Hello, ${name}!`,
        time: new Date(),
        info: 'Same resource used with personalized using query parameters.'
    })
});

app.get('/dog', (req, res) => {
    const breed = req.query.breed || 'Guest';
    res.json ({
        breed: `${breed}`,
        description: `Information about ${breed} breed.`
    })
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

