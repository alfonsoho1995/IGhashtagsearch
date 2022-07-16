const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const hashtagsapiRoutes = require('./routes/hashtagsapi-routes.js');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/api/hashtags', hashtagsapiRoutes);

/*
app.get('/api/gethashtags/', (req, res) => {
    console.log(req);
    res.send({ express: 'YOUR EXPRESS BACKEND IS GET NOW' });
});
*/


// app.get('/api/hashtags/:hashtags', (req, res) => {
//     res.send( {express: 'API RUN THIS !!!'} );
//     var hashtags = req.params['hashtags'];
//     res.send({
//         hashtags: hashtags
//     })
// })
