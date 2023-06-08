const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/webdata');
  console.log('DB connected');
}

const userSchema = new mongoose.Schema({
  email: String,
  webName: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// Create user route
server.post('/webdata', async (req, res) => {
  try {
    const { email, webName, password } = req.body;
    console.log('Received user creation request:', email, webName);

    const user = new User({
      email,
      webName,
      password,
    });

    const savedUser = await user.save();
    console.log('User saved:', savedUser);

    res.json(savedUser);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

// Get all users route
server.get('/webdata', async (req, res) => {
  try {
    const users = await User.find({});
    console.log('All users:', users);
    res.json(users);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

// Login route
server.post('/webdata/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Received login request:', email, password);

    const user = await User.findOne({ email, password });

    if (user) {
      console.log('Login successful');
      res.status(200).json({ message: 'Login successful' });
    } else {
      console.log('Invalid email or password');
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

// Home page route
server.get('/home', (req, res) => {
  res.json({ message: 'Welcome to the home page' });
});

server.listen(5000, () => {
  console.log('Server started');
});
