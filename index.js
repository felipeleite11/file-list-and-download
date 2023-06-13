const express = require('express')

const load = require('./list')

const app = express()

app.use('/', express.static('public'))

app.get('/list', load)

app.listen(8033, () => {
	console.log('Executando.....')
})