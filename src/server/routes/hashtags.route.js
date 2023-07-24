const express = require('express');
const hashtagsCtrl = require('../controllers/hashtags.controller');

const router = express.Router();

console.log(hashtagsCtrl.hashtagsGet());

router.route('/')
    .get(hashtagsCtrl.hashtagsGet)
    .post(hashtagsCtrl.hashtagsPost)

module.exports = router;

