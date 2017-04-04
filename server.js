const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const api = require('./server/routes/api');


//create an express app instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api',api);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`API Server listening on ${PORT}`));