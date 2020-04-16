var PORT = process.env.PORT || 5000
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static('public'))
app.use('/api', require('./Routes/api').route)

app.listen(PORT, () => console.log('server running at port 5000'))

module.exports = app