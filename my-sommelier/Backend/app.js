const express = require('express');
const mongoose = require('mongoose');

const wines = require ('./models/Wines')

const app = express();

mongoose.connect('mongodb+srv://chuault:U88sXW81dunhvkTC@cluster0.f3ofyxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get("/", (req,res) => {
  console.log('Requête reçue !');
});

// app.listen(4000);
// console.log("Attente des requetes au port 4000");



module.exports = app;
  
