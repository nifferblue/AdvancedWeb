const express = require('express');
const path = require('path');

const app = express();

const {MongoClient} = require('mongodb')

const url = "mongodb://localhost:27017"

async function main() {
  const client = new MongoClient(url);

  await client.connect();
  console.log('Connected successfully to the server')
}

const databaseList = await client.db().admin().listDatabases();

console.log('Databases');

databaseList.databases.array.forEach(db => {
  console.log(db.name)
  
});

await client.close()





// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the project pages
app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Home.html'));
});

app.get('/arrays', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'arrays.html'));
});

app.get('/project/events', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'events.html'));
});

app.get('/project/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.get('/project/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/project/jokeGenerator', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'jokeGenerator.html'));
});

app.get('/project/Main', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Main.html'));
});

// Serve login and signup pages
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'loginSignup.html')); // Assume the file is loginSignup.html
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'loginSignup.html')); // Same page, just a different link
});

// Handle login request
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username, password });

  // For demonstration purposes, you could add validation here (e.g., check against a database)
  if (username === 'user' && password === 'password') {
    res.send('Login successful');
  } else {
    res.send('Invalid credentials');
  }
});

// Handle signup request
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  console.log('Sign Up attempt:', { username, password });

  // Here, you'd typically save the user info to a database
  res.send(`Signup successful for user: ${username}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


