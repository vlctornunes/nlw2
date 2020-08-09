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
        subject: 1,
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

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    //consultar as classes de um determinado professor
    //e trazer os dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)
    

    //o proffy trabalha de 8-18h
    //o time_from (8h) precisa ser menor ou igual o do filtro
    //o time_to (18h) precisa ser maior que
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1320"
    `)

    //console.log(selectClassesSchedules)
})