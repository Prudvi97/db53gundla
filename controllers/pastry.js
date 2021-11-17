var Pastry = require('../models/pastry');


// for a specific pastry. 
exports.pastry_detail = async function (req, res) {
    console.log("detail " + req.params.id)
    try {

        result = await Pastry.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle pastry create on POST. 
exports.pastry_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Pastry();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.pastry = req.body.pastry;
    document.price = req.body.price;
    document.toppings = req.body.toppings;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle pastry delete form on DELETE. 
exports.pastry_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Pastry.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle pastry update form on PUT. 
exports.pastry_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Pastry.findById(req.params.id)
        // Do updates of properties 
        if (req.body.pastry)
            toUpdate.pastry = req.body.pastry;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.toppings) toUpdate.toppings = req.body.toppings;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};


// List of all pastrys 
exports.pastry_list = async function (req, res) {
    try {
        thepastrys = await Pastry.find();
        res.send(thepastrys);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.pastry_view_all_Page = async function (req, res) {
    try {
        thePastry = await Pastry.find();
        res.render('pastry', { title: 'Pastry Search Results', results: thePastry });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.pastry_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Pastry.findById(req.query.id)
        res.render('pastrydetail',
            { title: 'Pastry Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.pastry_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('pastrycreate', { title: 'Pastry Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};