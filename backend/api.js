const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://lalith889:Lalith123@ds259499.mlab.com:59499/yppm');

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};
// Mongoose Models//


// Updtaes Model
var updates = mongoose.model('updates' , {
    name: {
        type:String,
        trim:true
    },
    date: {
        type:String
    }
});

// Tesimonials Model
var testimonials = mongoose.model('testimonials' , {
    read : {
    },
    name : {
        type:String
    },
    message: {
        type:String
    }
});

//pendining testimonials Model

var ptestimonials = mongoose.model('ptestimonials', {
    name:{
        type:String
    },
    mob:{
        type:String
    },
    message:{
        type:String
    },
    read:{

    }
});

// prayer requests model

var prayerreq = mongoose.model('prayerreq', {
    read:{
        
    },
    name:{
        type:String
    },
    mob:{
        type:String
    },
    message:{
        type:String
    }
});
// Models End


// Get updates
router.get('/updates', (req, res) => {
    updates.find().sort({$natural:-1}).then((updates)=>{
        res.send(updates);
    },(e)=>{
        res.status(400).send(e);
    }); 
});

// get prayer request 
router.get('/prayerreq', (req, res) => {
    prayerreq.find().sort({$natural:-1}).then((prayerreq)=>{
        res.send(prayerreq);
    },(e)=>{
        res.status(400).send(e);
    }); 
});

// deleting prayer reqs
router.post('/delpr', (req, res) => {
    prayerreq.findByIdAndRemove(req.body.id, (doc)=>{
        res.send("ok deleted");
    });
});   

//get testimonials 
router.get('/gettm', (req, res) => {
    testimonials.find().sort({$natural:-1}).then((testimonials)=>{
        res.send(testimonials);
    },(e)=>{
        res.status(400).send(e);
    });
});
// adding testimonials

router.post('/addtestimonials', (req, res)=>{
    addtestimonials = new testimonials({
        read: req.body.read,
        name: req.body.name,
        message: req.body.message
    });

    addtestimonials.save().then((ok)=>{
        res.send(ok);
    },(e)=>{
        res.status(400).send(e);
    });
});

// adding prayer requests
 
router.post('/prayerreq', (req, res)=>{
    prayer = new prayerreq({
        read: false,
        name: req.body.name,
        mob: req.body.mob,
        message: req.body.message
    });

    prayer.save().then((ok)=>{
        res.send(ok);
    },(e)=>{
        res.status(400).send(e);
    });
});
//addupdate 

router.post('/addupdate', (req, res)=>{
    var update = new updates({
        name: req.body.name,
        date: req.body.date
    });
    update.save().then((update)=>{
        res.send(update);
    },(e)=>{
        res.status(400).send(e);
    });
});


//adding testimonials api

router.post('/ptm', (req, res)=>{
    var ptestimonial = new ptestimonials({
        name: req.body.name,
        date: req.body.mob,
        message: req.body.message,
        read:false
    });
    ptestimonial.save().then((ptestimonial)=>{
        res.send(ptestimonial);
    },(e)=>{
        res.status(400).send(e);
    });
});


//deleting updates
router.post('/updatedelete', (req, res) => {
    updates.findByIdAndRemove(req.body.id, (doc)=>{
        res.send("ok deleted");
    });
});    

// get ptestimonials 
router.get('/ptestimonials', (req, res)=> {
    ptestimonials.find().sort({$natural:-1}).then(result=>{
        res.send(result);
    },(e)=>{
        res.status(400).send(e);
    });

});

//removing pending testimonials 
router.post('/removeptm', (req, res)=>{
    ptestimonials.findByIdAndRemove(req.body.id, (result)=>{
        res.send("ok Removed");
    });
});

//removing  testimonials 
router.post('/removetm', (req, res)=>{
    testimonials.findByIdAndRemove(req.body.id, (result)=>{
        res.send("ok Removed");
    });
});
// Exports
module.exports = router;