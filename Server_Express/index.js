
// Requier Express Server:
const express = require('express');

// Requier body-parser:
const bodyParser = require('body-parser');

// Requier path:
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to Express</h1>");
// });

// Serve any static files
app.use(express.static(path.join(__dirname, '../Client_Static_HTML_File')));

app.listen(port, () => console.log(`Listening on port ${port}`));

