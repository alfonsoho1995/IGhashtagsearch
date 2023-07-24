const hashtagsModule = require('../modules/hashtags.module.js');

const hashtagsGet = (req, res) => {
    console.log("hashtagsGet Work !!!");
    hashtagsModule.selectHashtags()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            return res.send(err);
        })
}

const hashtagsPost = (req, res) => {
    console.log("hashtagsPost Work !!!");
    const insertValues = req.body;
    hashtagsModule.createHashtags(insertValues)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            return res.send(err);
        })
}

const hashtagsLocalGet = (req, res) => {
    console.log("hashtagsLocalGet Work !!!");
    const insertValues = req.body;
    hashtagsModule.storeInLocalStorageHashtags(insertValues)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            return res.send(err);
        })
}

const test = (req, res) => {
    res.send('測試');
}

module.exports = {
    test,
    hashtagsGet,
    hashtagsPost,
    hashtagsLocalGet
}