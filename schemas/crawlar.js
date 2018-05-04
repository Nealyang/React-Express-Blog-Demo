/**
 * 爬取内容的结构
 */
import mongoose from 'mongoose'

module.exports = new mongoose.Schema({
    title:String,
    content:String
});


