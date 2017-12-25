const express = require("express");

const app = express();
require("express-async-await")(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const githubSearchRepos = require("github-search-repos");

app.get("/search", async (req, res) => {
  let data = await githubSearchRepos(req.query.text + ":javascript");
  res.json(data);
  // res.json({

  //   lol: 1
  // })
});

app.listen(3001, async () => {
  console.log("Example app listening on port 3001!");
});
