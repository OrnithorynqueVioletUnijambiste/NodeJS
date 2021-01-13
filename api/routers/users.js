var express = require('express');
var User = require('../models/user');

var router = express.Router()

router.get('/', async (req, res) => {
    let users = await User.find({})
    res.json(users)
})

router.get('/:email', async (req, res) => {
    let user = await User.findOne({email: req.params.email})
    res.json(user)
})

router.get('/:id/:name', async (req, res) => {
    let user = await User.findOne({name: req.params.name, _id: req.params.id})
    res.json(user)
})

router.post('/', (req, res) => {
    let user = new User(req.body)
    user.save()
    res.json(user)
})

router.delete('/:id', async (req, res) => {
    let user = await User.findOneAndDelete({_id: req.params.id})
    res.json(user)
    

})

module.exports = router