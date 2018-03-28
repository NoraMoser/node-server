const express = require('express');

var app = express();

app.get('/', (request, response) => {
    // response.send('<h1>Hello, Express</h1>');
    response.send({
        name: 'Nora',
        likes: [
            'Reading', 'Relaxing', 'Eating'
        ]
    })
});

app.get('/about', (request, response) => {
    response.send('About Page');
})

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'There was an error'
    })
});

app.listen(3000);