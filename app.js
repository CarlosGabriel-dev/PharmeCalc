const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'home')));
 app.use(express.static(path.join(__dirname, 'inicial')));
app.use(express.static(path.join(__dirname, 'TelaLogin')));
app.use(express.static(path.join(__dirname, 'sobre')));
app.use(express.static(path.join(__dirname, 'calculo')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'home', 'inicial', 'index.html'))
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'home', 'sobre', 'about.html'))
});

app.get('/calculo', function (req, res) {
    res.sendFile(path.join(__dirname, 'home', 'calculo', 'calculo.html'))
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

