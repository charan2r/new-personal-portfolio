const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } 
    catch (error) {
        console.error('Authentication Error:', error);
        res.status(401).json({ message: 'Not authorized' });
    }
};

module.exports = protect;