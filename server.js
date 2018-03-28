const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website!'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'Nora\'s about page',
        currentYear: new Date().getFullYear()
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