const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
  return res.status(200).json({message: "test"});
})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
})