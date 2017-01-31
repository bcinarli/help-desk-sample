/**
 * @author Bilal Cinarli
 */

// Setup basic express server
const express = require('express');
const app     = express();
const server  = require('http').createServer(app);
const io      = require('socket.io')(server);
const port    = process.env.PORT || 8090;

server.listen(port, function() {
    console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/app'));

io.on('connection', function(socket) {
    let addedUser = false;

    socket.on('new message', function(data) {
        socket.broadcast.emit('new message', {
            from:    socket.username || 'backoffice',
            message: data.message,
            to:      data.to
        });
    });

    socket.on('add user', function(username) {
        if(addedUser) return;

        socket.username = username;
        addedUser       = true;

        socket.broadcast.emit('add user', {
            username: username
        });
    });

    socket.on('disconnect', function() {
        if(addedUser) {
            socket.broadcast.emit('user left', {
                username: socket.username
            });
        }
    });
});