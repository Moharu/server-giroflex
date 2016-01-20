var restify = require('restify');

var server = restify.createServer({
});

var gpio = require("pi-gpio");

var pinState = function (pin, state){
  gpio.open(pin, "output", function (err){
    gpio.write(pin, state,function(){
      gpio.close(pin);
    });
  });
}


server.get('/on', function (req, res){
    pinState(12,1);
    res.end();
});


server.get('/off', function (req, res){
    pinState(12,0);
    res.end();
});

server.get('/state', function (req, res){
    gpio.open(12, "output", function (err){
        gpio.read(12, function (err, value){
            res.send('' + value);
            console.log(err);
            console.log(value);
            gpio.close(12);
        });
    });
});

server.listen(1234);