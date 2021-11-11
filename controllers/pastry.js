var Pastry = require('../models/pastry'); 
  
 
// for a specific pastry. 
exports.pastry_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: pastry detail: ' + req.params.id); 
}; 
 
// Handle pastry create on POST. 
exports.pastry_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Pastry(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.pastry = req.body.pastry; 
    document.price = req.body.price; 
    document.toppings = req.body.toppings; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.pastry_view_all_Page = async function(req, res) { 
    try{ 
        thePastry = await Pastry.find(); 
        res.render('pastry', { title: 'Pastry Search Results', results: thePastry }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 