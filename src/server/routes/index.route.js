const express = require('express');
const router = express.Router();
const hashtags = require('./hashtags.route.js');
const hashtagsLocal = require('./hashtagsLocal.route.js');

router.get('/', (req, res, next) => {
    console.log('GET request inside route called !!!');
    res.json( { message: 'here is /' } );
});

router.use('/hashtags', hashtags);
router.use('/hashtagsLocal', hashtagsLocal);

module.exports = router;