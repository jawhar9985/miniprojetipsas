// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Importation des routes
const ouvriersRoutes = require('./dashboardadmin/ouvriers');
const magasinsRoutes = require('./dashboardadmin/magasins');

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Routes
app.use('/ouvriers', ouvriersRoutes);
app.use('/magasins', magasinsRoutes);

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
