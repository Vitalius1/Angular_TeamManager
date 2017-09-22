var mongoose = require('mongoose');
var Player = mongoose.model("Player");
module.exports = {
    showall: function (req, res) {
        Player.find({}, function (err, players) {
            if (err) {
                console.log(err);
            } else {
                res.json(players);
            }
        });
    },
    create: function (req, res) {
        var player = new Player(req.body);
        player.save(function (err) {
            if (err) {
                res.json(err);
                console.log('something went wrong');
            } else {
                Player.find({}, function (err, players) {
                    console.log('successfully added a player!');
                    res.json(players);
                });
            }
        });
    },
};