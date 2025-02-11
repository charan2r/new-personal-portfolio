const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (error) {
        console.log("Registration Error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login a user
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists and the password is correct
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Create a token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ token, role: user.role });
    } 
    catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;