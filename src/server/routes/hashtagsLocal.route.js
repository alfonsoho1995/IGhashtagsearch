const express = require('express');
const hashtagsCtrl = require('../controllers/hashtags.controller');

const router = express.Router();

router.route('/')
    .get(hashtagsCtrl.hashtagsLocalGet)

module.exports = router;

