const mongoose = require("mongoose");
dbConnect()

async function dbConnect() {
  try {
    await mongoose.connect('mongodb+srv://Tynai:0312456655@cluster0.gnydb.mongodb.net/jobportal', { useNewUrlParser: true });
    console.log('Mongo DB Connection success')
  } catch (error) {
    console.log('Mongo DB Connection failed')
  }
}

module.exports = mongoose