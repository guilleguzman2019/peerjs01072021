var PeerServer = require("peer").PeerServer; 

var server = PeerServer({port: 8080});

server.on("connection", function(id) {
console.log(id + " has connected to the PeerServer");
});

server.on("disconnect", function(id) {
console.log(id + " has disconnected from the PeerServer");
});