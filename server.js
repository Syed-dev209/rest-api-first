const http = require('http');
const app = require('./app');
const server = http.createServer(app); //creates server and hosts our app

server.listen(3000, console.log('app is running ') ); //port number