const express = require('express');
const app = express();

const apiKey = process.env.TCG_API_KEY;
console.log(apiKey);

app.get('/', (req, res) => {
    res.send('are we sklookin yet');
});

app.get('/one', (req, res) => {
    res.send('1');
});

app.listen(3002, () => {
    console.log('live on 3002');
});
