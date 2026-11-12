//role:
//01. starting the server
//02. connecting to the database

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://maheshsuthaar99_db_user:GrikkpRBTWFPndKR@note-cluster.ik6emqa.mongodb.net/notes-database",
    )
    .then(() => {
      console.log("connected to database");
    });
}

connectToDb();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
