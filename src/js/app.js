import express from 'express';
import mysql from 'mysql';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lab6'
};

const pool = mysql.createPool(dbConfig);

const PORT = 8080;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Success');
});

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM User', (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(results);
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  pool.query('SELECT * FROM User WHERE id = ?', [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(results[0]);
  });
});

app.post('/users', (req, res) => {
  const { password, username, email } = req.body;
  pool.query('INSERT INTO User (password, username, email) VALUES (?, ?, ?)', [password, username, email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(201).json({ message: 'User created', userId: results.insertId });
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  pool.query('DELETE FROM User WHERE id = ?', [userId], (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ message: 'User deleted' });
  });
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { password, username, email } = req.body;
  pool.query('UPDATE User SET password = ?, username = ?, email = ? WHERE id = ?', [password, username, email, userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated' });
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
  }
});