const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

function connect()
{
    return new Promise(async (resolve, reject) => {

        const conn = await mongoose.connect(process.env.MONGODB_URI)
            .then(()=> {
                console.log(" Database connection established");
            })
            .catch((err)=> {
                console.log("Connection failed");
                console.log("Error : ", err);
            })
    })
}

function close(){
    mongoose.disconnect();
}

module.exports = {
    connect,
    close
};