var express = require('express');
var app = express() 
const server = require('http').createServer(app);
const options = { /* ... */ };
const io = require('socket.io')(server, options);
const port = process.env.PORT || 3000;



// var server = app.listen(port)


//security
var helmet = require('helmet');
//logger

var morgen = require('morgan');
app.use(helmet());
app.use(morgen('common'))
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static('shared'));

const {World, Players} = require("./src/world")
var Constants = require("./shared/constants")


app.get('/', (req, res)=>{
	res.render( 'index.html');
  });


io.on('connection', (socket)=>{

	socket.on(Constants.JOIN_GAME,(arg)=>{
		console.log(`$socket.id has joinned the game put into players`)

	})

	
});

server.listen(port);