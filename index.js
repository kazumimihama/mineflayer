var a = require("express")();
var b = require("mineflayer")();
var c = [];

a.get("/", function(request, response) {
  
  var d = b.createBot({
    host: request.query.host,
    port: request.query.port,
    username: request.query.username,
    respawn: false
  });

  d.once("spawn", function() {
    c.push(d); 
  });
  
});

a.get("/chat", function(request, response) {
  try {
    c[Math.floor(Math.random() * c.length)].chat(request.query.message);
  }
  catch {}
});
