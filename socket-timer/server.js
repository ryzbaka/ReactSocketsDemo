const io = require('socket.io')();
const PORT = 8000;
io.on('connection',(client)=>{
    console.log("Server is connected")
    client.on('subscribeToTimer',(interval)=>{
        console.log("Client is subscribing to timer with interval ",interval)
        setInterval(()=>{
            client.emit('timer',new Date().toString());
        },interval);
    })
})

io.listen(PORT)
console.log(`Listening on port ${PORT}`)