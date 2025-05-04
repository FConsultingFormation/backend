const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Connexion à MongoDB
mongoose.connect('mongodb+srv://kokou:fcconsulting@cluster0.ibfgfyh.mongodb.net/nomDeTaDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Erreur MongoDB :', err));

const stuffRoutes = require('./routes/stuff');
app.use('/api/stuff', stuffRoutes);

module.exports = app;