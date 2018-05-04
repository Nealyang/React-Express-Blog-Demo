import mongoose from 'mongoose'
import crawlarSchema from '../schemas/crawlar'


module.exports = mongoose.model("crawlar",crawlarSchema);