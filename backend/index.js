const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  // Create and export the User model
  const userModel = mongoose.model('users', userSchema);


app.get("/users",async (req,res)=>{
    try {
        const users = await userModel.find();  // Fetch all users from MongoDB
        res.json(users);  // Respond with JSON data
      } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Server error' });
      }
})

app.listen(8000,()=>{
    console.log("Server is up and running")
})