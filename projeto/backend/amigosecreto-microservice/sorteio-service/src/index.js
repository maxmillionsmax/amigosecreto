const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);


mongoose.connect('mongodb+srv://maximilianocaetano:<L8AfT1iX73vxyTuh>@cluster0.s9h9c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});


app.listen(3335);