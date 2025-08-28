const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.send('Activity made by Sebastian C. Canlas');
});

// Dummy dataset
let users = [
  { id: 1, name: 'Carmela', email: 'mela@gmail.com', age: 25, salary: 25000 },
  { id: 2, name: 'Joseph', email: 'joe@yahoo.com', age: 30, salary: 45000 },
  { id: 3, name: 'James', email: 'james@msn.com', age: 35, salary: 30000 },
  { id: 4, name: 'John', email: 'john@gmail.com', age: 40, salary: 25000 },
  { id: 5, name: 'Frank', email: 'frank@yahoo.com', age: 45, salary: 45000 },
  { id: 6, name: 'Alex', email: 'alex@msn.com', age: 21, salary: 33000 },
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User cannot be found');
  res.json(user);
});

// GET params (name + age)
app.get('/api/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send(`Name: ${name}, Age: ${age}`);
});

// POST - add new user
app.post('/api/users', (req, res) => {
  const { name, email, age, salary } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email,
    age,
    salary,
  };
  users.push(newUser);
  res.json(newUser);
});

// DELETE user by ID
app.delete('/api/delete/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User cannot be found');

  const deletedUser = users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully', deletedUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
