const db = require('../database/index.js')
const gh = require('../helpers/github.js')
const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  gh.getReposByUsername(req.body.username, (data) => {
    db.save(data);
  });
 res.end('Working')
});

app.get('/repos', function (req, res) {
  // This route sends back the top 25 repos
  db.Repo.find().sort({watchers: -1}).limit(25).then(data => {
    res.send(data)
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

