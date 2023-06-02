const express = require('express');

const app = express();
const PORT = 5000;

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {});

app.listen(PORT, () => {
  console.log(`SERVER PORT: ${PORT}`);
});
