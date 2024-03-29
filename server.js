var http = require('http');
var app = require('express')();

var port = process.env.PORT || 3000;

var server = http.createServer(app);

function rand(length) {
    var result = '';
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

app.get('/',function(req,res){
	res.redirect('/'+rand(11));
});

app.get('/:code',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});

server.listen(port,function() {
	console.log('Server running on '+port);
});