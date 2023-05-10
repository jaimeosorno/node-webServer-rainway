const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT

//handlebards
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/',(req, res) => {
    res.render('home',{
        nombre :'jaime Vargas',
        titulo : 'Curso de Node'
    })
});

app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre :'jaime Vargas',
        titulo : 'Curso de Node'
    })
});

app.get('/elements',(req, res) => {
    res.render('elements',{
        nombre :'jaime Vargas',
        titulo : 'Curso de Node'
    })
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});