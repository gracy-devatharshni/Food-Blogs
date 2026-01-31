const mongoose=require("mongoose")

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("connected...")
    }
    catch(err){
        console.log("MongoDB Connection Error:", err.message)
        process.exit(1)
    }
}

module.exports=connectDb