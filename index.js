const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
