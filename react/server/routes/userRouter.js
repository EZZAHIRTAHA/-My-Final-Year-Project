const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const User = require('../models/userModel');

router.use(bodyParser.json());

router.post('/create-user', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        // password handled by firebase
        _id: req.body._id,
    });
    user.save((err) => {
        if (err) {
            res.status(400).send({ error: err });
        } else {
            res.status(200).send({ data: user });
        }
    });
});

module.exports = router;
