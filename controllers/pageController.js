const Post = require('../models/Post');

exports.getAbout = (req, res) => {
  res.render('about');
};

exports.getPost = (req, res) => {
  res.render('post');
};

exports.getById = async (req, res) => {
  const blog = await Post.findById(req.params.id);
  res.render('post', {
    blog,
  });
};

exports.getEditPage = async (req, res) => {
  const blog = await Post.findOne({ _id: req.params.id });
  res.render('edit', {
    blog,
  });
};

exports.getAddPage = (req, res) => {
  res.render('add_post');
};

exports.getHomePage = async (req, res) => {
  const blogs = await Post.find({});
  res.render('index', {
    blogs,
  });
};
