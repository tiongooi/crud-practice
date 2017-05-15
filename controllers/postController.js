const Post = require("../models/PostModel");

exports.index = (req,res) => {
    Post.find({}).then(posts => {
        res.locals.posts = posts;
    res.render("index");
  });
};

exports.create = (req,res) => {
  const content = req.body.content;
  let newPost = new Post;
  newPost.content = content;
  newPost.save().then(() => {
    res.redirect("/");
  });
};

exports.edit = (req,res) => {
  Post.findOne({_id: req.params.id}).then(post => {
    res.render("edit", {post: post});
  });
};

exports.editPOST = (req,res) => {
  Post.findOneAndUpdate({_id: req.params.id}, {$set:{content:req.body.content}}, {new:true}).then(post => {
    res.redirect("/");
  });
};

exports.delete = (req,res) => {
  Post.findOneAndRemove({_id: req.params.id}).then(() => {
    res.redirect("/");
  });
};

exports.getApi = (req,res) => {
  Post.find({}).then(data => {
    res.json(data);
  });
};

exports.getPostApi = (req,res) => {
  Post.findOne({_id: req.params.id}).then(data => {
    res.json(data);
  });
};
