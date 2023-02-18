var express = require("express");
const path = require("path");
var app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//app.use(express.static("public"));
app.get("/", function (req, res) {
  res.send("hello world");
});
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("pusher:subscribe", (payload) => {
    console.log("receive data from client: ", payload);
  });

  socket.emit("welcome", {'data': {id:1, title:'title'}});
});

server.listen(3001);
