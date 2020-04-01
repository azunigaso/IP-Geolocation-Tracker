const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// app.get("/", function(req, res) {
//     res.render("index.html");
//   });

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});