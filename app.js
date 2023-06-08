const express = require('express');
const ejs = require('ejs');
const Post = require('./models/Post');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

//DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const blogs = await Post.find({});
  res.render('index', {
    blogs,
  });
});

app.get('/blogs/:id', async (req, res) => {
  const blog = await Post.findById(req.params.id);
  res.render('post', {
    blog,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/blogs', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
