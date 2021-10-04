const express = require('express');
const app = express();
global.zipcodes = Array(100000).fill(false);

app.use(express.static('public'));
app.use(express.json());
app.use('/zipcode',require('./routes/zipcode'));

app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log("NOW LISTENING FOR REQUESTS");
});
