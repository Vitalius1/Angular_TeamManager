var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    position: { type: String, default: "Any Position"},
    game1: { type: String, default: "undecided"},
    game2: { type: String, default: "undecided"},
    game3: { type: String, default: "undecided"},
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);