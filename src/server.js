//SERVER
//usa uma variável para acessar o servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
const format = require('./utils/format')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))

//dá ao express o diretório dos statics
.use(express.static("public"))

//rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/classes', pageGiveClasses)
.post('/save-classes', saveClasses)

//start do servidor
.listen(5000)