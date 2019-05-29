    // require the express npm module, needs to be added to the project using "yarn add" or "npm install"
    const express = require('express');  // import the express package
    const helmet = require('helmet');

    const hubsRouter = require('../hubs/hubs-router.js');

    // creates an express application using the express module
    const server = express();  // creates the server

    // global middleware
    const middleware = [
        express.json(),
        helmet(),
        logger
    ]

    server.use(middleware);


    // handle requests to the root of the api, the / route
        // configures our server to execute a function for every GET request to "/"
        // the second argument passed to the .get() method is the "Route Handler Function"
        // the route handler function will run on every GET request to "/"
    server.get('/', addName, (req, res) => {
    // express will pass the request and response objects to this function
    // the .send() on the response object can be used to send a response to the client
    res.send(`
        <h2>Lambda Hubs API</h>
        <p>Welcome to the Lambda Hubs API</p>
    `);
    });

server.use('/api/hubs', terminalEvent, hubsRouter);

function logger (req, res, next) {
    console.log(`A ${req.method} request to '${req.url}'`);
    next();
}

function addName(req, res, next) {
    console.log('\nname added\n');
    req.name = 'Web XIX';
    next();
}

//write middleware that stops the request and sends back 401 and `{message: 'you shall not pass!' }`
function terminalEvent(req, res) {
    res.status(401).json({ message: 'You shall not pass!'})
}
    // add an endpoint that returns all the messages for a hub
    // add an endpoint for adding new message to a hub

module.exports = server;