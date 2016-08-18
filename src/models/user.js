var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  name: String,
  score: Number
});

// we are declaring user as the new model name
// and assigning the schema to this model in the second argument
module.exports = mongoose.model('User', UserSchema);
