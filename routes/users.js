const express = require ('express');
const router = express.Router();

/* GET home page. */
router.get('/register', (req, res, next) => {
    console.log("USER REGISTER");
    res.render('users/register');
});

router.post('/add', (req, res, next) => {
    console.log("ADD USERS");
    userInfo.save({
        name:req.body.userFirstName,
        firstName: req.body.userFirstName,
        email: req.body.userEmail,
        password: bcrypt.hashSync(req.body.userPassword, saltRounds) 
    })
    res.redirect('/users');
});




module.exports = router;
