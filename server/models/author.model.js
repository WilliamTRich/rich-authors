const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Author name is required'
        ],
        minLength: [3, 'Name has to be at least 3 characters.']
    }
})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author