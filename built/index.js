var express = require('express');
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(cors());
app.get('/', function (req, res) {
    return res
        .status(200)
        .send("test successful")
        .json({ message: "test" });
});
app.listen(3000, function () {
    console.log("Server listening on port 3000");
});
