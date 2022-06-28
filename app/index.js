var express = require('express');
var app = express();
var PORT = 5000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('home');
/* response.send('text') でテキストを返せる */
/* response.render('ejsファイル名') でページを返せる */
})

app.listen(PORT, function() {
  console.log("Node app is running at localhost:", PORT)
});