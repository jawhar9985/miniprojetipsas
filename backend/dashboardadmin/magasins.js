// magasins.js

const express = require('express');
const router = express.Router();

// Exemple de données
let magasins = [
    { id: 1, nom: 'Magasin A', ville: 'Paris' },
    { id: 2, nom: 'Magasin B', ville: 'Lyon' }
];

// GET - Récupérer tous les magasins
router.get('/', (req, res) => {
    res.json(magasins);
});

// POST - Ajouter un nouveau magasin
router.post('/', (req, res) => {
    const { nom, ville } = req.body;
    const nouveauMagasin = { id: magasins.length + 1, nom, ville };
    magasins.push(nouveauMagasin);
    res.status(201).json(nouveauMagasin);
});

// DELETE - Supprimer un magasin par ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    magasins = magasins.filter(magasin => magasin.id !== id);
    res.sendStatus(204);
});

module.exports = router;
