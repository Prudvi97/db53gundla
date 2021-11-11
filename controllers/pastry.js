var Pastry = require('../models/pastry'); 
  
 
// for a specific pastry. 
exports.pastry_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: pastry detail: ' + req.params.id); 
}; 
 
// Handle pastry create on POST. 
exports.pastry_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: pastry create POST'); 
}; 
 
// Handle pastry delete form on DELETE. 
exports.pastry_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: pastry delete DELETE ' + req.params.id); 
}; 
 
// Handle pastry update form on PUT. 
exports.pastry_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: pastry update PUT' + req.params.id); 
}; 


// List of all pastrys 
exports.pastry_list = async function(req, res) { 
    try{ 
        thepastrys = await Pastry.find(); 
        res.send(thepastrys); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 