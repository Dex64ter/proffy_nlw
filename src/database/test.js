const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: "Carlos Foguetinho", 
        avatar: "https://scontent.fthe5-1.fna.fbcdn.net/v/t31.0-0/c0.0.206.206a/p206x206/13029680_1090892270963051_7226690241749067043_o.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_ohc=hXMl-YjikFkAX-zIt85&_nc_ht=scontent.fthe5-1.fna&oh=40ac75b4e38ae3f888a7fa405ac80ada&oe=5F54F83D",
        whatsapp: "899789849198",
        bio: "Não se incomodem com meu nome eu o uso como disfarçe para os meus amigos malandros, tenho um amg malandro malandrinho, ele manja muito das malandragens, ele tinha até um apelido mas eu esqueci. Minha especialidade é salgadinhos, Todddynho e Minecraft."
    }
    
    classValue = {
        subject: 1, 
        cost: "40"
        // O proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados após cadastro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // conscultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabaha, por exemplo, é das 8h - 18h
    // o horário do time_from(8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
    // console.log(selectClassesSchedules)

})