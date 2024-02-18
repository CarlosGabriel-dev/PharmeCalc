const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'home')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home', 'telas', 'index.html'))
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

