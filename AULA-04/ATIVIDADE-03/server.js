const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (request, response) => {
    console.log(request.body)
    console.log(request.query)
    return response.send(`<h1>Parabéns! Usuário(a): ${request.body.name}, incluído(a) com sucesso!</h1>`)
})

app.listen(3003)