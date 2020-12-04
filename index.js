import express from 'express';

const web = express();

web.use(express.static('./public'));

web.use('/', function (req, res) {
    res.send({message: 'Assalamualikum'})
});

web.listen(process.env.PORT || 3000);

