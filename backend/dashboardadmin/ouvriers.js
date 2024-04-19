// ouvriers.js

const express = require('express');
const router = express.Router();

// Exemple de données
let ouvriers = [
    { id: 1, nom: 'Jean', poste: 'Menuisier' },
    { id: 2, nom: 'Marie', poste: 'Électricien' }
];

// GET - Récupérer tous les ouvriers
router.get('/', (req, res) => {
    res.json(ouvriers);
});

// POST - Ajouter un nouvel ouvrier
router.post('/', (req, res) => {
    const { nom, poste } = req.body;
    const nouvelOuvrier = { id: ouvriers.length + 1, nom, poste };
    ouvriers.push(nouvelOuvrier);
    res.status(201).json(nouvelOuvrier);
});

// DELETE - Supprimer un ouvrier par ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    ouvriers = ouvriers.filter(ouvrier => ouvrier.id !== id);
    res.sendStatus(204);
});

module.exports = router;
