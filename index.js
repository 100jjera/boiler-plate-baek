const express = require('express')
const app = express()
const port = 3000

const mongoose =require('mongoose')
mongoose.connect('mongodb://jaehun:abcd1234@boilerpalte-shard-00-00.ehzem.mongodb.net:27017,boilerpalte-shard-00-01.ehzem.mongodb.net:27017,boilerpalte-shard-00-02.ehzem.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qxv79b-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser:true , useUnifiedTopology:true , useCreateIndex:false
}).then(()=>console.log('MongoDB connected....'))
.catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})