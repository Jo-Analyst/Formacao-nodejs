const express = require("express")
const app = express()
const router = require("./routes/routes")
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
    // parse application/json
app.use(express.json())
app.use(cors());
app.use("/", router);

app.listen(8686, () => {
    console.log("Servidor rodando")
});