require ("dotenv").config();
const mongoose = require('mongoose');


async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to db');     
   }
    catch(error){
        console.error('database connection error', error);      
   }
    
}

module.exports = connectDB;