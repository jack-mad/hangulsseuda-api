// imports
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

//middlewares
require('dotenv').config();
connectDB();
app.use(cors()) //json request from react to server
app.use(express.json({extended: true})); //express config for send json to server


//routes
app.use("/api/users", require("./routes/users"))
app.use('/',require('./routes/routes'))

//server
app.listen(process.env.PORT, () => console.log(`포트 ${process.env.PORT}의 활성 서버 - Servidor activo en puerto ${process.env.PORT}`))