const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('App Running'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  `Server running on port: ${PORT}`;
});
