var express = require('express'); 
const pastry_controlers= require('../controllers/pastry'); 
var router = express.Router(); 
 
/* GET pastrys */ 
router.get('/', pastry_controlers.pastry_view_all_Page ); 
module.exports = router; 