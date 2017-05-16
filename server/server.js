'use strict';

const path = require('path');
const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

var app = express();
var port = process.env.PORT || 3000;
app.set('port', port);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.send('index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
	res.json(req.file);
});

app.listen(port, () => {
	console.log(`Up on port ${port}`);
});
