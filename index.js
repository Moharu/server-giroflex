var restify = require('restify');

var server = restify.createServer({
});

var gpio = require("pi-gpio");

var pinState = function (pin, state){
  gpio.open(pin, "output", function (err){
    gpio.write(pin, state,function(){
      gpio.close(pin);
    }
  }
}


server.get('/on', function(req, res){
    pinState(12,1);
    res.end();
});


server.get('/off', function(req, res){
    pinState(12,0);
    res.end();
});

server.listen(8080);