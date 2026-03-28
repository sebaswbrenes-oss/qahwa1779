const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Dummy user for demonstration
const user = {
    id: 1,
    username: 'user',
    password: 'password'
};

// POST /auth/login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple authentication
    if (username === user.username && password === user.password) {
        // Generate a token
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.status(200).json({ token });
    }
    
    return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;