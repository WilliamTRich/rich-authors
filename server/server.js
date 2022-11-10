const express = require('express')
const app = express()
const cors = require('cors')
require('./config/mongoose.config')
app.use(cors())

app.use(express.json(), express.urlencoded({ extended: true }))

const authorRoutes = require('./routes/author.routes')
authorRoutes(app)

app.listen(8000, () => console.log('Server is ready on port 8000'))