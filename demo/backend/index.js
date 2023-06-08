const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/userdata');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
   email:String,
   password:String,
});

const Logindata = mongoose.model('Logindata', logindataSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/userdata',async (req,res)=>{
     
    let logindata = new Logindata();
    logindata.email = req.body.email;
    logindata.password = req.body.password;
   
    const doc = await logindata.save();

    console.log(doc);
    res.json(doc);
})

server.get('/userdata',async (req,res)=>{
    const docs = await Logindata.findMany((logindata,password)=> logindata.email === email,logindata.password=== password);
    res.json(docs)
})

server.listen(8080,()=>{
    console.log('server started')
})