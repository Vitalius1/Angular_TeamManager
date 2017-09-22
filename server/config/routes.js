var player = require('../controllers/player_controller.js');

module.exports = function (app) {
    app.get('/players.json', (req, res) => {
        console.log("GET /players.json");
        player.showall(req, res);
    });

    app.post('/players.json', (req, res) => {
        console.log("POST /players.json");
        player.create(req, res);
    });

    app.all("*", (req, res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};