const express = require('express');
const app = express();

// Mock database of user profiles
const userProfiles = {
    1: {id: 1, name: 'Alice', email: 'alice@example.com'},
    2: {id: 2, name: 'Bob', email: 'bob@example.com'},
};

// Route to fetch user profile
app.get('/profile/:id', (req, res) =>{
    const userId = req.params.id;

    //Directly fetching user data without authorization check
    if(userProfiles[userId]) {
        res.json(userProfiles[userId]);
    }else {
        res.status(404).send('User not found');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});