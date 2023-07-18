const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log("🚀 ~ file: dbConn.js:7 ~ connectDB ~ error:", error)
        
    }
}

module.exports = connectDB