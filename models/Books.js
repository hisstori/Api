// Imported required modules.
const mongoose = require('../db/connection')
// Declares model.
const Schema = mongoose.Schema
// All information that should be captured
const Book = new Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: {
        date: String,
    },
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
})

module.exports = mongoose.model('Book', Book)