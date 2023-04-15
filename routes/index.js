const express = require ('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    console.log("HOME PAGE /");
  
    res.render('index.hbs');
});

router.get('/login', (req, res, next) => {
    console.log("login");
    res.render('login.hbs'/*, {layout: "login_layout.hbs"}*/ );
});



module.exports = router;
