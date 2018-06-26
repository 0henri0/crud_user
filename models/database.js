let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'test'; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
let userSchema = new mongoose.Schema({
  email: String,
  firstname: String,
  lastname: String,
  password: String,
  address:String,
  urlanh:String
})

const user = mongoose.model('user',userSchema)

user.create([
  { 
  email: "String",
  firstname: "String",
  lastname: "String",
  password: "String",
  address:"String",
  urlanh:"String"},
  {
    email: "String",
  firstname: "String",
  lastname: "String",
  password: "String",
  address:"String",
  urlanh:"String"
  }
  ])
var x = user
  .find({
    lastname: "String"
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })


module.exports = new Database()