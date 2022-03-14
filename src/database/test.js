const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db)=>{
    //inserir dados na tabela
    /*await saveOrphanage(db, {   
        lat: "-15.8092456",
        lng:  "-48.0942799",
        name: "Lar dos Meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",   
        whatsapp: "981075351",
        images: [
           "https://i.redd.it/2u45mv1axts31.jpg?resize=1215%2C640&ssl=1"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends:"0"
    })*/


    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orphanato pelo id

    //const orphanage = await db.all('SELECT * FROM orphanages where id = "1"')
    //console.log(orphanage)

    //deletar dado da tabela
    //await db.run("DELETE FROM tabela WHERE id = '3'")
})