const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const bookrouter = require("./routes/book-routes");
const cookieParser  = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors({ credentials: true,origin:"http://localhost:3000" }));
app.use(cookieParser()); 
app.use(express.json());


app.use("/api",router);
app.use("/books",bookrouter);

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Viraj:N0TMOAn9hZzYtCUt@cluster0.ssbpou4.mongodb.net/Auth_DB?retryWrites=true&w=majority").then( () => {
     
      app.listen(5000);
      console.log("Connected to DataBase");

}).catch((err) => console.log(err));


