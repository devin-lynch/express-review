require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const apiKey = process.env.TCG_API_KEY;
// console.log(apiKey);

const apiCall = async () => {
    try {
        const url = 'https://api.pokemontcg.io/v2/';
        // const response = await fetch(`${url}cards/det1-2`, {
        const response = await fetch(`${url}sets`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const { data } = await response.json();
        const pokeSet = data;
        console.log(pokeSet);
        return pokeSet;
    } catch (err) {
        console.warn(err);
    }
};

app.get('/', async (req, res) => {
    const pokeSet = await apiCall();
    res.send(pokeSet);
});

app.get('/one', (req, res) => {
    res.send('1');
});

app.use('/cards', require('./controllers/cards.js'));

app.listen(3002, () => {
    console.log('live on 3002');
});
