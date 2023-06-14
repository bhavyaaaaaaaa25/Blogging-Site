//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const homeStartingContent =
  "If you ask a writer what do you think makes people read your work they will say their heart. They left it all on the page. They left themselves vulnerable and wide open on the page. Writers sometimes write from their own lives, but more often than not their writing has some aspect of their own lives in it. They put words together, mix in all their heart and emotions, and the lines blur between truth and fiction. A good writer knows where to leave the heart on the page and where to create the rest of the story. You have a voice, a story, and because I know you are still breathing as you are reading this, a heart. Below, you can find stories that you might wanna give a read.";
const aboutContent =
  "NewStory aims at hearing from people who ever happen to open this site, and drop a piece of their heart here. No one here would know each other, they would just be bringing a smile on another person's face. If you're reading this, you know what to do. Go ahead, the compose button awaits you, and I, cannot wait to read what you have in mind.";
// const contactContent =
//   "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
const posts = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", { homeStartingContent: homeStartingContent, posts:posts });
});
app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});
// app.get("/contact", function (req, res) {
//   res.render("contact", { contactContent: contactContent });
// });
app.get("/compose", function (req, res) {
  res.render("compose");
});

app.get("/posts/:topics",function(req,res){
  const topic = _.lowerCase([string=req.params.topics]);
   posts.forEach(function(post){
   const searchedTopic = _.lowerCase([string =post.title]);
  if(topic === searchedTopic)
  {
    res.render("post" ,{title:post.title, content:post.body})
    // console.log("Match Found!");
  }
});
});

app.post("/compose", function (req, res) {
  const name = {
    title: req.body.compose,
    body: req.body.post,
  };
  posts.push(name);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
