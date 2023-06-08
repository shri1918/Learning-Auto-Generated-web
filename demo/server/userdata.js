const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/video');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    title: String,
    videolink: String,
    videouplode: String,
    notes: String
});

const User = mongoose.model('User', userSchema);




const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/video',async (req,res)=>{
     
    let user = new User();
    user.title = req.body.title;
    user.notes = req.body.notes;
    user.videolink = req.body.videolink;
    user.videouplode = req.body.videouplode;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/video',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8002,()=>{
    console.log('server started')
})