const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();

const clientPath = `${__dirname}/../client`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", (sock) => {
  console.log("Someone Connected");
  sock.emit("message", "Hi you are connected"); //Send this to the connected client.

  //sending message to everyone which has been sent from the client side
  sock.on("message", (text) => {
    io.emit("message", text);
  });
});

server.on("error", (err) => {
  console.log("Server error", err);
});
server.listen(8080, () => {
  console.log("RPS started on 8080");
});
