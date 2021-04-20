const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({"message" : "Online !!"})
})

app.get("/table", (req, res) => {
    res.json({"message" : "Table query page !"})
})

app.listen(port, () => {
  console.log(Example app listening at http://localhost:${port});
});