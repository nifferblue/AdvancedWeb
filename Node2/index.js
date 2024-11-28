const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();

const url = "mongodb://localhost:27017";
const dbName = "Project4035";
let db;

// Connect to MongoDB and set up the database
async function connectToDatabase() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(dbName);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToDatabase().catch(console.error);

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Home.html'));
});

app.get('/project/arrays', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'arrays.html'));
});

app.get('/project/events', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'events.html'));
});

app.get('/project/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'form.html'));
});

app.get('/project/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index1.html'));
});

app.get('/project/jokeGenerator', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'jokeGenerator.html'));
});





// Serve login and signup pages
app.get('/project/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'loginSignup.html'));
});

app.get('/project/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'loginSignup.html'));
});

// Handle signup request
app.post('/project/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Insert the user data into the 'users' collection
    const result = await db.collection('users').insertOne({ username, password });
    console.log('User signed up:', result.insertedId);
    res.send(`Signup successful for user: ${username}`);
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).send('An error occurred during signup');
  }
});

// Handle login request
app.post('/project/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the 'users' collection
    const user = await db.collection('users').findOne({ username, password });
    if (user) {
      res.send('Login successful');
    } else {
      res.send('Invalid credentials');
    }
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('An error occurred during login');
  }
});

app.post('/project/form',async(req,res)=>{
  const{name, gender, major, email, message } = req.body;

  try {
    const result = await db.collection('formSubmissions').insertOne({ name, gender, major, email, message  });
    console.log('Form submitted:', result.insertedId);

        // Respond with a success message
        res.send(`Form Submitted Successfully`);

  } catch (error) {

    console.error('Error during form submission:', err);
    res.status(500).send('An error occurred while processing your form.');
    
  }

})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
