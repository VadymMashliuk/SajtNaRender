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

let naselennaPivnicnojiAmeryky = 617300000;
setInterval(() => {
    naselennaPivnicnojiAmeryky++;
    io.emit("zbilsennaNaselennaPivnicnojiAmeryky", naselennaPivnicnojiAmeryky);
}, 3000);
setInterval(() => {
    naselennaPivnicnojiAmeryky--;
    io.emit("zmensennaNaselennaPivnicnojiAmeryky", naselennaPivnicnojiAmeryky);
}, 2400);
let naselennaPivdennojiAmeryky = 439500000;
setInterval(() => {
    naselennaPivdennojiAmeryky++;
    io.emit("zbilsennaNaselennaPivdennojiAmeryky", naselennaPivdennojiAmeryky);
}, 2182);
setInterval(() => {
    naselennaPivdennojiAmeryky--;
    io.emit("zmensennaNaselennaPivdennojiAmeryky", naselennaPivdennojiAmeryky);
}, 3429);
let naselennaJevropy = 732800000;
setInterval(() => {
    naselennaJevropy++;
    io.emit("zbilsennaNaselennaJevropy", naselennaJevropy);
}, 3428);
setInterval(() => {
    naselennaJevropy--;
    io.emit("zmensennaNaselennaJevropy", naselennaJevropy);
}, 1846);
let naselennaAziji = 4342300000;
setInterval(() => {
    naselennaAziji++;
    io.emit("zbilsennaNaselennaAziji", naselennaAziji);
}, 511);
setInterval(() => {
    naselennaAziji--;
    io.emit("zmensennaNaselennaAziji", naselennaAziji);
}, 1143);
let naselennaAfryky = 1216100000;
setInterval(() => {
    naselennaAfryky++;
    io.emit("zbilsennaNaselennaAfryky", naselennaAfryky);
}, 727);
setInterval(() => {
    naselennaAfryky--;
    io.emit("zmensennaNaselennaAfryky", naselennaAfryky);
}, 1714);

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.emit("counterUpdate", counter);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server started!"));