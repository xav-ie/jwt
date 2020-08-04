const WebSocket = require("ws");
const PORT = 8082
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {
    console.log("new client connected!");
    ws.on("message", (data) => {
        console.log(`Client has sent us: ${data}`);
        ws.send(data.toUpperCase());
    });
    ws.on("close", () => {
        console.log("client has disconnected");
    });
});


console.log(`server started on port ${PORT}...`);