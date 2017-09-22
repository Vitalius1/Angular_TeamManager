var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);