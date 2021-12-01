const mongoose = require("mongoose") 
const pastrySchema = mongoose.Schema({ 
 pastry: String, 
 toppings: {type:String ,required:true}, 
 price: {type:Number ,min:0,max:50}
}) 
 
module.exports = mongoose.model("Pastry", 
pastrySchema) 

