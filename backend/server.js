const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes  = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
app.use(express.json());


// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'], 
    credentials: true, 
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes); 
app.use('/api/contacts', contactRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

// Running the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});