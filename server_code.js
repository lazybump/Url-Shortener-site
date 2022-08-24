const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
require("dotenv").config();

app.use(cors({
    origin:'http://127.0.0.1:5500'  // allow other origins
}))

app.use(express.json()); // parse request body as JSON


const endpoint = 'https://api.rebrandly.com/v1/links';
let urlObj;

// Consume third-party API
const rebrandlyAPI = async (urlToShorten) => {
    const data = JSON.stringify({ destination: urlToShorten });
    try {
        const response = await fetch(
            endpoint, {
                method: 'POST',
                body: data,
                headers: {
                'Content-type': 'application/json',
                'apikey': process.env.MY_API_KEY
                }
            });
        if(response.ok){
            const jsonResponse = await response.json();
            urlObj = jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}


app.post('/server', (req, res) => {
    let { userInput } = req.body;
    rebrandlyAPI(userInput).then(() => {
        res.status(201).json(urlObj)
    });
});


app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});