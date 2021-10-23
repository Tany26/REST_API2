const express = require('express');


const app = express();

const PORT = process.env.PORT || 4444;


const db = require('./config/db');
db();



app.use(express.json());
app.use('/api', require('./routes/api'));


app.listen(PORT, () => {
    console.log("http://localhost/4444");
})