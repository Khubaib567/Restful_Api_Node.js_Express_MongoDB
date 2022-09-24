if(process.env.NODE !== 'production'){
  require('dotenv').config()
}
const express = require('express')
const app = express()
const morgan = require('morgan');

const router = require('./router/user_routes')

app.use(morgan("common"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)


app.listen(process.env.PORT || 4000, function(){
  console.log(`Server is listening on %d in %s environment`,this.address().port,app.settings.env)
})

const mongoose = require("mongoose")
const UserSchema = require('./model/user.model');

mongoose.connect(process.env.DB_URL,{
  useNewUrlParser:true,
})

const db = mongoose.connection;

db.on("error", (error) => {
console.error(error);
});
db.once("open", () => {
console.log("Connected with Database!");
});



