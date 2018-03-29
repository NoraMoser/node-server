const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.')
        }
    })
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs')
// });
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// app.get('/', (request, response) => {
//     // response.send('<h1>Hello, Express</h1>');
//     response.send({
//         name: 'Nora',
//         likes: [
//             'Reading', 'Relaxing', 'Eating'
//         ]
//     })
// });

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Nora\'s Home page',
        welcomeMessage: 'Welcome to my website!'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'Nora\'s about page'
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'There was an error'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});