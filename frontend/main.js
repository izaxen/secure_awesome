const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();
app.use(express.static('build'));
app.use('/api/', proxy('http://localhost:8080'));
app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Listening on http://localhost:' + port));