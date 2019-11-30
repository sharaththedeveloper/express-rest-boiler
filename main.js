const express = require('express')
const app = express()
const port = 3000
//importing cors
var cors = require('cors')
app.use(cors())

//importing JSON support
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//helmet JS
const helmet = require('helmet')
app.use(helmet())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))