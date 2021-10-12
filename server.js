const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

// Body Parser MIddleware
app.use(express.json());

// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
	.connect(db) // Adding new mongo url parser
	.then(() => console.log('MongoDB Connected Successfully ... '))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/Items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(
			path.resolve(__dirname, 'client', 'build', 'index.html')
		);
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
