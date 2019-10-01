const express = require('express');

const server = express();

//middleware


//endpoints
server.get('/', (req, res) => res.json({"api": "get"}))

const port = 8888
server.listen(port, () => console.log(`***********\n Server is Running on localhost: ${port} \n********** `))