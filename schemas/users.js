/**
 * 用户的表结构
 */
import mongoose from 'mongoose'

module.exports = new mongoose.Schema({
    username:String,
    password:String,
    type:String//管理员、普通用户
});


