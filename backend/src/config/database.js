const mongoose = require('mongoose')
// import mongoose from 'mongoose'
mongoose.Promise = global.Promise // remover advertencia desnecessária
module.exports = mongoose.connect('mongodb://localhost/todo')