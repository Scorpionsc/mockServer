// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.send({
        data: 'ok'
    })
});

app.listen(80, err => {
    console.log('Listening on port: 80');
});
