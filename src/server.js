const proffys = [
    {
        name: "Victor Nunes",
        avatar: "https://avatars0.githubusercontent.com/u/35666544?s=460&u=57025d33e8f8aca0134aa35acef8235b77d70ee6&v=4",
        whatsapp: "86994615411",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Geografia",
        cost: "30",
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars0.githubusercontent.com/u/35666544?s=460&u=57025d33e8f8aca0134aa35acef8235b77d70ee6&v=4",
        whatsapp: "86994615411",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Geografia",
        cost: "45",
        weekday: [1],
        time_from: [830],
        time_to: [1130]
    },
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html")
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

//usa uma variável para acessar o servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views'), {
    express: server,
    noCache: true,
}

//dá ao express o diretório dos statics
server
.use(express.static("public"))

//rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/classes', pageGiveClasses)

.listen(5500)