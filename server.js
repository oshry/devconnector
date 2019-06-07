const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
//passport - validate, extract user information

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//  Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

//  Passport Config
require('./config/passport.js')(passport);


app.get('/', (erq,res) => res.send('Hellosssss11222'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.POST || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
