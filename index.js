const express = require('express');
const port    = 8000;
const app = express();
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');

app.use('/', require('./routes'));


/**
 * socket io start
 */
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => { 
    socket.emit('connect', {message: 'a new client connected'})
});

/*------------end---------------*/
server.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});

