const express = require ('express');
const router = express.Router();

const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET register page. */
router.get('/register', (req, res, next) => {
    console.log("USER REGISTER");
    res.render('users/register');
});

router.post('/add', (req, res, next) => {
    console.log("ADD USERS");
    User.save({
        name:req.body.userLastName,
        firstName: req.body.userFirstName,
        email: req.body.userEmail,
        password: bcrypt.hashSync(req.body.userPassword, saltRounds) 
    })
    res.redirect('/users');
});




module.exports = router;
