const express = require('express');
const app = express();

// Mock database of user profiles
const userProfiles = {
    1: { id: 1, name: 'Alice', email: 'alice@example.com' },
    2: { id: 2, name: 'Bob', email: 'bob@example.com' },
};

// Middleware to simulate logged-in user
app.use((req, res, next) => {
    // Simulate Alice being logged in
    req.loggedInUser = { id: 1, name: 'Alice' };
    next();
});

// Route to fetch user profile with proper access control
app.get('/profile/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);

    // Check if the logged-in user is authorized to access this profile
    if (req.loggedInUser.id === userId) {
        res.json(userProfiles[userId]);
    } else {
        res.status(403).send('Access denied');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
