var express = require('express');
var Projet = require('../models/projet');

var router = express.Router()

router.get('/', async (req, res) => {
    let projets = await Projet.find({})
    res.json(projets)
})

router.get('/:nom_projet', async (req, res) => {
    let projet = await Projet.findOne({nom_projet: req.params.nom_projet})
    res.json(projet)
})

router.post('/', (req, res) => {
    let projet = new Projet(req.body)
    projet.save()
    res.json(projet)
})

router.delete('/:id', async (req, res) => {
    let projet = await Projet.findOneAndDelete({_id: req.params.id})
    res.json(projet)
    

})

module.exports = router