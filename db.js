const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@bharath888.abfsc.mongodb.net/?retryWrites=true&w=majority/linkShort`, (err)=>{
    !err?console.log("Db Success"):console.log('Db Failed');
})