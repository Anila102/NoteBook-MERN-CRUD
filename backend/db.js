const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017"
// const mongoURI="mongodb://localhost:27017/mynotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"


const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
console.log("Mongo Connected")
    })
}
module.exports =connectToMongo;

