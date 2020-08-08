//DATA
const proffys = [
    {
        name: "Victor Nunes",
        avatar: "https://avatars0.githubusercontent.com/u/35666544?s=460&u=57025d33e8f8aca0134aa35acef8235b77d70ee6&v=4",
        whatsapp: "86994615411",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Geografia",
        cost: "30",
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars1.githubusercontent.com/u/10151970?s=460&v=4",
        whatsapp: "86994615411",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Artes",
        cost: "45",
        weekday: [1],
        time_from: [830],
        time_to: [1130]
    },
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//FUNCTIONS
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, subjects, weekdays, filters})
}

function pageGiveClasses(req, res) {
    const data = req.query

    //criar array e ver se é vazio
    //const isEmpty = Object.keys(data).length == 0
    const isNotEmpty = Object.keys(data).length > 0

    //se for, manda os dados e vai pra Study
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        //adicionar data à lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

//SERVER
//usa uma variável para acessar o servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//dá ao express o diretório dos statics
.use(express.static("public"))

//rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/classes', pageGiveClasses)

//start do servidor
.listen(5500)