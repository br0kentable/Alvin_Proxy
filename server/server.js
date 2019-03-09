const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});