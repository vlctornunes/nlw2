//usa uma variável para usar o servidor
const express = require('express')
const server = express()

//dá ao express o diretório dos statics
server.use(express.static("public"))

//executes landing page
.get('/', function(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
})

//executes study page
.get('/study', function(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
})

//executes give-classes page
.get('/classes', function(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)