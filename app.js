var express = require('express');
var app = express();
var log = console.log;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bil = require('./controllers/bil.js');
var kund = require('./controllers/kund.js');
var anstalld = require('./controllers/anstalld.js');
var reservdel = require ('./controllers/reservdel.js');
var skada = require('./controllers/skada.js');
var port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hej Gruppen!!!!!!');
});

// Bilar
app.get('/bilar', bil.visabilar);
/*app.get('/bilar/:id', bil.hittabilmedID);
app.put('/bilar/:id', bil.uppdaterabil);
app.post('bilar', bil.laggtillbil);
app.delete('/bilar/:id', bil.tabortbil);*/

// Kunder
app.get('/kunder', kund.visakunder);

// Anställda
app.get('/anstallda', anstalld.visaanstallda);

// Skador
app.get('/skador', skada.visaskador);
app.get('/skador/:id', skada.hittaskadamedID);
app.put('/skador/:id', skada.uppdateraskada);
app.post('/skador', skada.laggtillskada);
app.delete('/skador/:id', skada.tabortskada);

// resevdel
app.get('/reservdelar', reservdel.visareservdelar);

app.listen(port, function() {
console.log("Server startad på port : " + port);
});