const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@bharath888.abfsc.mongodb.net/linkShort?retryWrites=true&w=majority`, (err)=>{
    !err?console.log("Db Success"):console.log('Db Failed');
})