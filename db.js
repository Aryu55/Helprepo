const mongoose = require("mongoose")
const {url} = require("./config")
  

exports.connectDB=()=>{
    mongoose  
    .connect(url,{  
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
         useUnifiedTopology: true,
         
    })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err))

}

