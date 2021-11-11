const mongoose = require("mongoose") 
const pastrySchema = mongoose.Schema({ 
 pastry: String, 
 toppings: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Pastry", 
pastrySchema) 

