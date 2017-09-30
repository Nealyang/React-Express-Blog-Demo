import mongoose from 'mongoose'
import tagSchema from '../schemas/tags'

module.exports =  mongoose.model('Tag',tagSchema);