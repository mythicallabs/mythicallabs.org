const express = require('express');
const fs = require('fs')
const app = express();

app.get('/', (req, res) => res.send('<h1>Mythical Labs</h1>'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));