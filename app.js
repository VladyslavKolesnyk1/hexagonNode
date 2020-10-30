const express = require('express');

const db = require('./dataBase').getInstance();
db.setModels();
const app = express();

const cors = require('cors');

app.use(cors());


app.use(express.json());
app.use(express.urlencoded());
const {UserRouter, TileRouter} = require('./routes');
app.use('/api/users', UserRouter);
app.use('/api/tiles', TileRouter);

app.listen(4000, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('Listen' + 4000)
    }
});