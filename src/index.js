require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(express.json());
routes(app);

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}/`)
});