var app = require("express")();
var mineflayer = require("mineflayer");
var tmi = require("tmi.js");
var clients = [];

app.get("/", function(request, response) {
  
  var bot = mineflayer.createBot({
    host: request.query.host,
    port: request.query.port,
    username: request.query.username,
    respawn: false
  });

  bot.once("spawn", function() {
    clients.push(bot); 
  });
  
});

app.listen(3000);

const client = new tmi.Client({
	channels: [ 'akatsukidhotaru', 'murakamisuigun' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	if (!message.includes(":")) {
		try {
    		clients[Math.floor(Math.random() * clients.length)].chat(message);
    	}
    	catch {}
    }
});
