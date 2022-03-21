const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Caroline Marques',
    });
});

app.get('/cv', (req, res) => {
    res.render('cv');
});

app.get('/disciplinas', (req, res) => {
    res.render('disciplinas');
});

app.get('/midia', (req, res) => {
    res.render('midia');
});

app.listen(3000, () => {
    console.log(`Check localhost:3000`);
});
