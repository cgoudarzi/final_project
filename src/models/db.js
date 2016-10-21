var mongoose = require('mongoose');

var connectionString = process.env.NODE_ENV === 'production' ? 'mongodb://admin:bright-eyed-beam69@ds063546.mlab.com:63546/wdi-5-final-project' : 'mongodb://localhost/scores'

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to ' + connectionString)
})

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error ' + err)
})

mongoose.connection.on('disconnected', function() {
  console.log('mongoose disconnected')
})
