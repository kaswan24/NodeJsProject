// const Notes = require('../../config/database').Notes


const route = require('express').Router()

// route.get('/:title/notes', (req, res) => {
// var title = req.body.title
// Notes.findAll({where: {title: title}}).then((notes) =>{
//     res.status(200).send(notes)
// }).catch((error) =>{
//     res.status(500).send({
//         error: "could not retrive notes"
//     })
// })
// })

// route.post('/:title/notes', (req, res) =>{
// var title = req.body.title
// Notes.create({
//     title: title,
//     note: req.body.note
// }).then((note) =>{
//     req.status(201).send(note)
//     }).catch((error) => {
// req.status(501).send({
//     error: "problem came when adding notes"
// })
// })
// })

exports = module.exports = route


