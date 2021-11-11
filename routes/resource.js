var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var pastry_controller = require('../controllers/pastry'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// pastry ROUTES /// 
 
// POST request for creating a pastry.  
router.post('/resource/pastrys', pastry_controller.pastry_create_post); 
 
// DELETE request to delete pastry. 
router.delete('/resource/pastrys/:id', pastry_controller.pastry_delete); 
 
// PUT request to update pastry. 
router.put('/resource/pastrys/:id', 
pastry_controller.pastry_update_put); 
 
// GET request for one pastry. 
router.get('/resource/pastrys/:id', pastry_controller.pastry_detail); 
 
// GET request for list of all pastry items. 
router.get('/resource/pastrys', pastry_controller.pastry_list); 
 
module.exports = router; 