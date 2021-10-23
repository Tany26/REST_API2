const router = require('express').Router();
const l1 = require('../models/l1');
const l2 = require('../models/l2');
const l3 = require('../models/l3');
const l4 = require('../models/l4');
const l5 = require('../models/l5');
const db = require('../config/db');
const login = require("../models/login");

router.post('/l1', async(req, res) => {

    const l = new l1({
        post: req.body.post,
        link: req.body.link,
        Date: Date.now()
    });
    const response = await l.save().then(() => {
        res.status(200).json({ msg: "Succesfully" });

    }).catch(e => {
        res.status(404).json(e);
    });



});
router.post('/l2', async(req, res) => {

    const l = new l2({
        post: req.body.post,
        link: req.body.link,
        Date: Date.now()
    });
    const response = await l.save().then(() => {
        res.status(200).json({ msg: "Succesfully" });

    }).catch(e => {
        res.status(404).json(e);
    });



});
router.post('/l3', async(req, res) => {

    const l = new l3({
        post: req.body.post,
        link: req.body.link,
        Date: Date.now()
    });
    const response = await l.save().then(() => {
        res.status(200).json({ msg: "Succesfully" });

    }).catch(e => {
        res.status(404).json(e);
    });



});
router.post('/l4', async(req, res) => {

    const l = new l4({
        post: req.body.post,
        link: req.body.link,
        Date: Date.now()
    });
    const response = await l.save().then(() => {
        res.status(200).json({ msg: "Succesfully" });

    }).catch(e => {
        res.status(404).json(e);
    });



});
router.post('/l5', async(req, res) => {

    const l = new l5({
        post: req.body.post,
        link: req.body.link,
        Date: Date.now()
    });
    const response = await l.save().then(() => {
        res.status(200).json(response._doc);

    }).catch(e => {
        res.status(404).json(e);
    });



});


router.get('/l1', async(req, res) => {
    await l1.find().then((p) => {
        res.send(p);
    });
})

router.get('/l1', async(req, res) => {
    await l1.find().then((p) => {
        res.send(p);
    });
})

router.get('/l2', async(req, res) => {
    await l2.find().then((p) => {
        res.send(p);
    });
})

router.get('/l3', async(req, res) => {
    await l3.find().then((p) => {
        res.send(p);
    });
})

router.get('/l4', async(req, res) => {
    await l4.find().then((p) => {
        res.send(p);
    });
})

router.get('/l5', async(req, res) => {
    await l5.find().then((p) => {
        res.send(p);
    });
})






module.exports = router;