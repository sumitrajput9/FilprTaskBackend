const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();
const conString = process.env.MONGODB_URI;

async function ConfigureDb() {
    try {
        await mongoose.connect(conString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected....");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

module.exports = { ConfigureDb };
