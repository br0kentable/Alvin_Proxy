const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, '../public')));
// app.use('/restaurants/:restaurantId', express.static(path.join(__dirname, '../Restaurant_details/src')));

// app.get('/restaurants/:restaurantId', (req,res)=>res.send(req.params.restaurantId))

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});