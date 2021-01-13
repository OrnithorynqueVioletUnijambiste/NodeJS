var mongoose = require('mongoose')

const ProjetSchema = new mongoose.Schema({
    nom_projet:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

var userModel = mongoose.model('projet', ProjetSchema)
module.exports = userModel