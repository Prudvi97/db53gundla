var express = require('express'); 
const pastry_controlers= require('../controllers/pastry'); 
var router = express.Router(); 
 
/* GET pastrys */ 
router.get('/', pastry_controlers.pastry_view_all_Page ); 

router.get('/detail', pastry_controlers.pastry_view_one_Page); 
/* GET create costume page */ 
router.get('/create', pastry_controlers.pastry_create_Page); 
module.exports = router; 