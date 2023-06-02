const express = require('express');
const ejs = require('ejs');

const app = express();
const PORT = 5000;

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/add', (req, res) => {
  res.render('add_post');
});

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
