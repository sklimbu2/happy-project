const mongoose = require('mongoose')
const CommentsSchema = new mongoose.Schema({
    comment : String,
    phone : String
})
module.exports = mongoose.model('comment', CommentsSchema)