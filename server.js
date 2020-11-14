const io = require('socket.io')(3000) ;
const users = {} ;

io.on('connection' , socket => {

    socket.on("users" , name => {
        users[socket.id] = name
    });

    socket.on('chat' , data => {
        socket.broadcast.emit('chat-message' , { message : data, name : users[socket.id] });
    }) ;
});