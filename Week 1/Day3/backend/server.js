require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// MySQL connection
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log('MySQL connected');
        connection.release();
    } catch (err) {
        console.error('MySQL connection error:', err);
    }
})();

// Routes
app.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const query = 'INSERT INTO FormData (name, email, message) VALUES (?, ?, ?)';
        const [result] = await pool.execute(query, [name, email, message]);
        res.status(201).json({ message: 'Form data saved successfully', data: { id: result.insertId, name, email, message } });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Failed to save form data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
