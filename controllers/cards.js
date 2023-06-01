const express = require('express');
const router = express.Router();
require('dotenv').config();

const apiKey = process.env.TCG_API_KEY;

const getBaseSets = async () => {
    try {
        const url = encodeURI(
            'https://api.pokemontcg.io/v2/cards?q=(set.id:base1 OR set.id:base2 OR set.id:base3)'
        );
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const { data } = await response.json();
        const baseSets = data;
        console.log(baseSets);
        console.log(url);
        return baseSets;
    } catch (error) {
        console.warn(error);
    }
};

router.get('/base', async (req, res) => {
    const baseSets = await getBaseSets();
    res.send(baseSets);
});

module.exports = router;
