const express = require('express')
// const chalk = require('chalk')
const Contact = require('./contact')

// const log = console.log
const api = express.Router()

// const errorLog = msg => log(chalk.red(msg))
// const successLog = msg => log(chalk.green(JSON.stringify(msg)))
// // const dataLog = msg => log(chalk.yellow(msg));
// const blueLog = msg => log(chalk.blue(msg))
// const orangeLog = msg => log(chalk.hex('#ffa600')(JSON.stringify(msg)))

api.get('/contacts', (req, res) => {
  Contact.find({})
    .then(contact => {
      res.send(contact)
    })
})

api.post('/contacts', (req, res) => {
  Contact.create(req.body.body)
    .then(() => {
      Contact.find({})
        .then(contact => {
          res.send(contact)
        }) }).catch(err => console.log(err))
})

api.put('/contacts/:id', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body.body)
    .then((data) => {
      Contact.find({})
        .then(contact => {
          res.send(contact)
        })
    })
})

api.delete('/contacts/:id', (req, res) => {
  Contact.deleteOne({_id: req.params.id})
    .then((data) => {
      Contact.find({}).then(contact => {
        res.send(contact)
      })
    })
})

module.exports = api
