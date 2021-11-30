const mongoose = require('mongoose');

// This is the schema, something that acts as a blueprint to the structure of data that we store
const sliderInfoSchema = mongoose.Schema({
  player: { type: String, required: true},
  slider_value: { type: Number, required: true}
});

// This is the model, something that monggose will use to interact with
module.exports = mongoose.model('SliderInfo', sliderInfoSchema);
// Model will automatically create a collection of the same name in plural form (i.e SliderInfos)
