require('dotenv').config();
const express = require('express');
const app = express();

const apiKey = process.env.TCG_API_KEY;
// console.log(apiKey);

const apiCall = async () => {
    try {
        const url = 'https://api.pokemontcg.io/v2/';
        const response = await fetch(`${url}cards/det1-2`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const data = await response.json();
        const pokePic = data.data.images.small;
        console.log(pokePic);
        return pokePic;
    } catch (err) {
        console.warn(err);
    }
};

app.get('/', async (req, res) => {
    const pokePic = await apiCall();
    res.send(pokePic);
});

app.get('/one', (req, res) => {
    res.send('1');
});

app.listen(3002, () => {
    console.log('live on 3002');
});
