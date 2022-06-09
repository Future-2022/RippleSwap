const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var bodyParser = require('body-parser');
var app = require('express')();
const cors = require('cors');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./ssl/keys/ccbd3_f0f1f_25bc220610828209fb74d096d07c3b03.key'),
  cert: fs.readFileSync('./ssl/certs/rippleswap_app_ccbd3_f0f1f_1686054325_bace79dac427c575283ae08de052d9aa.crt')
};

var https = require('https').createServer(options, app);

app.use(cors({
    origin: '*'
}));

var io = require('socket.io')(https, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    transports : ['websocket']
  }
});

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/stake', require('./routes/api/stake'));
app.use('/api/admin', require('./routes/api/admin'));
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

io.on('connection', function(socket){
  socket.on("stake", (arg) => {
    io.emit('allow', 'Success socket');  
  });
  socket.on("response", (arg) => {
    io.emit('response', 'response');  
  });
  socket.on('unstake', function () {
    io.emit('unstakeResponse', 'response'); 
  });
  socket.on('unStakeResponse', function () {
    io.emit('unstakeResponse-client', 'response'); 
  });
  socket.on('unStakeReject', function () {
    io.emit('unstakeReject-client', 'response'); 
  });
});
https.listen(8443, ()=> {
     console.log('listening on *:8443');
});