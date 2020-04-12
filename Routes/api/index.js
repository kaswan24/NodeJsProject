const route = require('express').Router()

route.use('/tasks', require('./Tasks'))
route.use('/notes', require('./Notes'))

exports = module.exports = {
    route
}
