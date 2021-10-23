require('dotenv').config();

const mongoose = require('mongoose');


function connectdb() {

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        //useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connected");
    }).catch(e => {
        console.log(e);
    })

}


module.exports = connectdb;