const express = require ('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    console.log("HOME PAGE /");
  
    res.render('index.hbs');
});


module.exports = router;
