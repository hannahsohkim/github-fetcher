const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  id: Number,
  repoName: String,
  ownerLogin: String,
  htmlUrl: String,
  description: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  data = JSON.parse(data);
  data.map((repo) => {
    var newRepo = new Repo({
      id: repo.id,
      repoName: repo.name,
      ownerLogin: repo.owner.login,
      htmlUrl: repo.html_url,
      description: repo.description,
      watchers: repo.watchers
    })
    newRepo.save((err) => {
      if(err) {
        console.log(err)
      }
    });
  });
}


let topRepos = (callback) => {
  let top = Repo.find({}).sort({watchers: -1}).limit(25);
  console.log(top, 'TOP25')
  callback(null, top)
}

module.exports.Repo = Repo;
module.exports.save = save;
