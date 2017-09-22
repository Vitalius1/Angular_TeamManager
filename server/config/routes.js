var note = require('../controllers/notes_controller.js');

module.exports = function (app) {
    app.get('/notes', function (req, res) {
        console.log("GET /notes");
        note.showall(req, res);
    });
    
    app.post('/notes', (req, res) => {
        console.log("POST /notes");
        note.create(req, res);
    });

    app.all("*", function (req, res) {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};