const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const tmi = require('tmi.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const twitchname = 'zeystreams'; 

const client = new tmi.Client({ channels: [twitchname] });
client.connect().catch(console.error);

let market = {
    price: 10.00,
    lastPrice: 10.00,
    history: [] 
};


for (let i = 0; i < 40; i++) market.history.push(market.price);

client.on('message', (channel, tags, message, self) => {
    if(self) return;
    const msg = message.toLowerCase();

    if (msg.startsWith('!buy')) {
        market.price *= 1.005; 
        broadcastUpdate(true);
    } 
    
    if (msg.startsWith('!sell')) {
        market.price *= 0.995; 
        broadcastUpdate(true);
    }
});

// Pour que le marché bouge tout seul

// setInterval(() => {
//    const volatility = (Math.random() * 0.006) - 0.003; 
//    market.price = market.price * (1 + volatility);
//    if(market.price < 0.01) market.price = 0.01;
//    broadcastUpdate(false);
// }, 2500);

function broadcastUpdate(forced) {
    if (!forced && Math.abs(market.price - market.lastPrice) < 0.001) return;

    const direction = market.price >= market.lastPrice ? 'up' : 'down';
    
    market.history.push(market.price);
    if (market.history.length > 40) market.history.shift();

    io.emit('priceUpdate', {
        price: market.price.toFixed(2), 
        direction: direction,
        history: market.history
    });
    
    market.lastPrice = market.price;
}

server.listen(3000, () => {
    console.log('Server started on port 3000');
});