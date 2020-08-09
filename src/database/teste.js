const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Victor Nunes",
        avatar: "https://avatars0.githubusercontent.com/u/35666544?s=460&u=57025d33e8f8aca0134aa35acef8235b77d70ee6&v=4",
        whatsapp: "86994615411",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: "Química",
        cost: "30"
        //o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //o class id virá pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to: 1230
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1230
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos
})