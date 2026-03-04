const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(express.static("public"));

let counter = 0;

setInterval(() => {
    counter++;
    io.emit("counterUpdate", counter);
}, 1000);

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.emit("counterUpdate", counter);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server started!"));