import express from 'express';

const web = express();

web.use(express.static('./'));

web.use('/', function (req, res) {
    res.send({message: 'hi'})
});

web.listen(process.env.PORT || 3000);

