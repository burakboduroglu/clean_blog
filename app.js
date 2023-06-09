const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const blogController = require('./controllers/blogController');
const pageController = require('./controllers/pageController');

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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  }),
);

//ROUTES
app.get('/', pageController.getHomePage);
app.get('/blogs/:id', pageController.getById);
app.get('/about', pageController.getAbout);
app.get('/post', pageController.getPost);
app.post('/blogs', blogController.createPost);
app.put('/blogs/:id', blogController.updatePost);
app.delete('/blogs/:id', blogController.deletePost);
app.get('/add_post', pageController.getAddPage);
app.get('/blogs/edit/:id', pageController.getEditPage);

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
