var mongoose = require('mongoose');
var Player = mongoose.model("Player");
module.exports = {
    showall: function (req, res) {
        Player.find({}, function (err, players) {
            if (err) {
                console.log('something went wrong with showing all', err);
                res.json(err);
            } else {
                console.log('successfully found all players!');
                res.json(players);
            }
        });
    },
    create: function (req, res) {
        var player = new Player(req.body);
        player.save(function (err) {
            if (err) {
                res.json(err);
                console.log('something went wrong with creation');
            } else {
                Player.find({}, function (err, players) {
                    console.log('successfully added a player!');
                    res.json(players);
                });
            }
        });
    },
    delete: function (req, res) {
        Player.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                res.json(err);
                console.log('something went wrong with deletion');
            } else {
                Player.find({}, function (err, players) {
                    console.log('successfully deleted a player!');
                    res.json(players);
                });
            }
        });
    },
};