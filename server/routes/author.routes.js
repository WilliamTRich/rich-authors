const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.post('/api/author/new', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.findAuthors)
    app.get('/api/author/:id', AuthorController.findAuthor)
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
    app.put('/api/author/edit/:id', AuthorController.updateAuthor)
}