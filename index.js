const express = require("express");
const uuid = require("uuid");
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors())
const port = 3001



const students = []

app.get('/students', (request, response) =>{

    return response.json(students)
})

app.post('/students', (request, response)=>{

    const {name, note, assessment}= request.body



        const student = {name, note, aproved:`${note >= 6? "aprovado" : "reprovado"}`, assessment, id:uuid.v4()}

        students.push(student)

        return response.status(201).json(student)

})

app.delete('/students/:id', (request, response) =>{

    const index = request.studentIndex

    students.splice(index,1)

    return response.status(204).json()

})







app.listen(port,() =>{

    console.log(`sever started on port ${port}🚀`)
})


