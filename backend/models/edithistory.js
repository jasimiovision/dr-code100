const mongoose = require('mongoose');

// This is the schema, something that acts as a blueprint to the structure of data that we store
const edithistorySchema = mongoose.Schema({
   keyframe_id: { type: String, required: true }, // id of parent keyframe
   username: { type: String, required: true },
  edit_at: { type: Date }
});

// This is the model, something that monggose will use to interact with
module.exports = mongoose.model('Edithistory', edithistorySchema);
// Model will automatically create a collection of the same name in plural form (i.e Edithistory)