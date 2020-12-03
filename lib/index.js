const express = require("express");
const { ExpressPeerServer } = require("peer");

const port = process.env.PORT || 9000;
const peerServerPath = "/peer";
const connectPath = "/connect";

console.log("Starting...");

const app = express();

app.get("/", (req, res, next) => res.send("Hey!"));
const server = app.listen(port);

const peerServer = ExpressPeerServer(server, {
  path: connectPath,
});
app.use(peerServerPath, peerServer);

console.log(
  `🚀 Started Peer Server http://localhost:${port}${peerServerPath}${connectPath}`
);
