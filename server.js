const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = 8080;

app.post('/api/auth', (req, res) => {
    res.status(400).json({errors: { global: "Invalid Credentials"}});
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Running on PORT : ${ port }`));