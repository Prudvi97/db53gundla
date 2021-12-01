var express = require('express'); 
const pastry_controlers= require('../controllers/pastry'); 
var router = express.Router(); 

//A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET pastrys */ 
router.get('/', pastry_controlers.pastry_view_all_Page ); 

router.get('/detail', pastry_controlers.pastry_view_one_Page); 
/* GET create costume page */ 
router.get('/create',secured, pastry_controlers.pastry_create_Page); 
router.get('/update',secured, pastry_controlers.pastry_update_Page); 
router.get('/delete',secured, pastry_controlers.pastry_delete_Page); 
module.exports = router; 