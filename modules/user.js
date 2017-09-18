import mongoose from 'mongoose'
import userSchema from '../schemas/users'


module.exports = mongoose.model("User",userSchema);