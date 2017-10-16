import mongoose from 'mongoose'
import articleSchema from '../schemas/article'

module.exports = mongoose.model('Article',articleSchema);