let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'test'; // REPLACE WITH YOUR DB NAME
mongoose.connect(`mongodb://${server}/${database}`)
let userSchema = new  mongoose.Schema({
						email: String,
						firstname: String,
					  	lastname: String,
					 	password: String,
					 	address:String,
					  	Points: Number,
					  	Status: String,
					  	roll: Number,
					  	urlanh:String,
					  	created_on: String
					  })
const user = mongoose.model('user',userSchema)
module.exports = mongoose.model('user',userSchema)