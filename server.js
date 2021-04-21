const express = require("express")
const {Client} = require("pg")
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.json({"message" : "Online on VM1 !!"})
})


const client = new Client({
    user: "postgres",
    password: "azureuser",
    host: "10.7.0.8",
    database: "postgres",
    port: 5432,
  });
  
client.connect();
  
  app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
    );
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  

  app.get("/table", (req, res) => {
    const query = `SELECT * FROM moto`;
    client.query(query, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json(result)
      client.end();
    });
  })
  
//   app.get("/sum", (req, res)=> {
//       request.query(
//         "SELECT SUM(price) as sum FROM [moto].[postgres]",
//         (err, result) => {
//           console.log(err, result);
//           const totale = Math.round((result.recordset[0].total)*100)/100
//           const rep = `${totale} euros`;
//           res.send(rep);
//         }
//       );
//       // res.json({id : "salut"})
      
//   })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});