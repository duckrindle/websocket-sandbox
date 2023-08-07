const express = require('express');

console.log('1');

const server = express()
  .use((req, res) => res.sendFile('/index.html', { root: __dirname }))
  .listen(3000, () => console.log(`Listening on ${3000}`));

console.log('2');

const { Server } = require('ws');
const ws_server = new Server({ server });

console.log('3');

ws_server.on('connection', (ws) => {
  console.log('New client connected!');

  ws.on('close', () => console.log('Client has disconnected!'));
});

console.log('4');

setInterval(() => {
  ws_server.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);

console.log('5');
