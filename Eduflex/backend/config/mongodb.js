const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection_url = process.env.LOCAL_DB_CONNECT;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", async () => {
  console.log(`✅ Connected to MongoDB`);
  console.log(`📌 Database Name: ${mongoose.connection.db.databaseName}`);
});

db.on("error", (err) => {
  console.error("❌ MongoDB Connection Error:", err);
});

module.exports = mongoose;
