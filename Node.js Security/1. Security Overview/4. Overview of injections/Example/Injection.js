const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.urlencoded({ extended: true }));

// Initialize database
const db = new sqlite3.Database(' :memory:');
db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT");
    db.run("INSERT INTO user (username, password) VALUES ('admin', 'password123'");
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Vulnerable login endpoint
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}' `;
    console.log(`Executing query: ${query}`);

    db.get(query, (err, row) => {
        if(err){
            res.status(500).send('Internal Server Error');
            return;
        }

        if(res) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });

    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });


});