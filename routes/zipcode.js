const express = require('express');
const router = express.Router();

function pad(num) {
    num = num.toString();
    while (num.length < 5) num = "0" + num;
    return num;
}

router.get('/display',function(req,res,next){
    let output = Array();
    let toggle = false;
    let previous = 0;
    zipcodes.forEach((element,index)=>{
        if(element && (!toggle)){
            toggle = true;
            previous = index;
        } else if ((!element) && toggle){
            toggle = false;
            if(((index-previous)>1)){
                output.push(pad(previous).concat('-',pad(index)));
            } else {
                output.push(pad(previous));
            }
        }
    });
    if (toggle){
        if(((99999-previous)>1)){
            output.push(pad(previous).concat('-99999'));
        } else {
            output.push('99999');
        }
    }
    res.send(output.join(',')).then(next);
});

router.get('/has/:id',function(req,res,next){
    res.send(zipcodes[parseInt(req.params.id)]);
});

router.put('/insert/:id',function(req,res,next){
    zipcodes[parseInt(req.params.id)] = true;
    res.send("Zipcode ".concat(req.params.id," inserted.")).then(next);
});

router.delete('/delete/:id',function(req,res,next){
    zipcodes[parseInt(req.params.id)] = false;
    res.send("Zipcode ".concat(req.params.id," deleted.")).then(next);
});

module.exports = router;
