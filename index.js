const express = require('express')
const cors = require('cors');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000

//useMiddleware
app.use(cors())
app.use(express.json())

//MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@todo.mhjbt.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run () {
    try{
        client.connect();
        console.log("connected");
    }
    finally{

    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})