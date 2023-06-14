const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function() {
    console.log('Server started on port 3000');
});

app.post('/search', async function(req, res) {
    const prompt = req.body.query;

    // Use dynamic import for node-fetch
    const fetch = (await import('node-fetch')).default;

    const response = await fetch("https://zero-api.civai.co/get_answer", {
        headers: {
            Authorization: "Bearer " + process.env.ZEROLM_API_KEY,
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ prompt, llm: "bard" }) // llm supports bard, gpt3, gpt4
    });
    const data = await response.json();
    res.json(data.response);
});

app.use(express.static('public'));
