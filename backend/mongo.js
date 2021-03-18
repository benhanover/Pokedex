require('dotenv').config();
const mongoose = require('mongoose');

const password = process.env.mongoPassword;

const url = `mongodb+srv://benerez:${password}@cluster0.ogunc.mongodb.net/PokemonCollection?retryWrites=true&w=majority`;

try {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
  console.log('connected to MongoDB');
} catch(e) {
  console.log('error connecting to MongoDB:', error.message);
}

const pokemonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  height: {type: Number, required: true},
  weight: {type: Number, required: true},
  id: {type: Number, required: true},
  back_default: {type: String, required: true},
  front_default: {type: String, required: true},
  types: {type: Array}
});

pokemonSchema.set('toJson', {
  transform: (document, returnedObject) => {
    delete returnedObject._v;
    delete returnedObject._id;
  }
}); 

module.exports = mongoose.model('Pokemon', pokemonSchema);