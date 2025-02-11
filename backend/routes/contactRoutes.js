const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

// Submit contact form
router.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.json({ message: "Message sent successfully" });
    } 
    catch (error) {
        console.error("Contact form submission error", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;