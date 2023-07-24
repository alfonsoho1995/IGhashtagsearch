const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const index = require('./server/routes/index.route.js');

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
        "connect-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "data:"],
        "style-src-elem": ["'self'", "data:"],
        "script-src": ["'unsafe-inline'", "'self'"],
        "object-src": ["'none'"],
      },
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (!module.parent) {
    app.listen(port, () => {
        console.log(`server started on port http://127.0.0.1:${port}`);
    })
};

app.get('/', function(req, res) {
    res.send('hello hashtags');
});

app.use('/api', index);

module.exports = app;