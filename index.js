var express = require('express');
var path = require('path');
var serveIndex = require('serve-index')
var app = express();

app.set('PORT', (5000));

app.use('/images', serveIndex('public/images'));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('PORT'));