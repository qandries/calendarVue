const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.use(
    '/client',
    express.static(__dirname + '/public')
);

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});