const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/graphql-proxy', async (req, res) => {
    const url = 'https://venia.magento.com/graphql';

    const graphqlQuery = req.body.query;

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ query: graphqlQuery })
        });

        const data = await response.json();
        res.json(data);

    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({ error: 'Error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});