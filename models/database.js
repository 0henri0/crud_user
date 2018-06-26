let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'test'; // REPLACE WITH YOUR DB NAME

// class Database {
//   constructor() {
//     this._connect()
//   }
// _connect() {
    
//        .then(() => {
//          console.log('Database connection successful')
//        })
//        .catch(err => {
//          console.error('Database connection error')
//        })
//   }
// }
 mongoose.connect(`mongodb://${server}/${database}`)
let userSchema = new mongoose.Schema({
  email: String,
  firstname: String,
  lastname: String,
  password: String,
  address:String,
  urlanh:String,
  Points: Number,
  Status: String,
  roll: Number
})


const user = mongoose.model('user',userSchema)

// user.create([
//   { 
//   email: "String",
//   firstname: "String",
//   lastname: "String",
//   password: "String",
//   address:"String",
//   urlanh:"String"},
//   {
//     email: "String",
//   firstname: "String",
//   lastname: "String",
//   password: "String",
//   address:"String",
//   urlanh:"String"
//   }
//   ])

module.exports = mongoose.model('user',userSchema)