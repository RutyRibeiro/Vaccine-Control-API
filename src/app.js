const cors = require("cors");
const express = require("express");
const app = express();
const index = require("./routes");
const vaccines = require("./routes/vaccines");

app.use(express.json());


app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Accessf-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(cors());
app.use("/", index);
app.use("/vaccines",vaccines)
module.exports = app;