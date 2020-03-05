const data = require('./books.json')
const Book = require('../models/Books')

// Old code used to fill database, was less effective than code block below this.
// const bookData = data.map(item => {
//     const book = {
//         title: item.title,
//         isbn: item.isbn,
//         pageCount: item.pageCount,
//         publishedDate: {
//             $date: item.$date,
//         },
//         thumbnailUrl: item.thumbnailUrl,
//         shortDescription: item.shortDescription,
//         longDescription: item.longDescription,
//         status: item.status,
//         authors: item.authors,
//         categories: item.categories,
//     };
// });
// Creates a collection of books, data is provided from books.json
Book.deleteMany({}).then(() => {
    Book.create(data)
    .then(books => {
        console.log(books);
    })
    .catch(err => {
        console.log("Error!", err)
    });
});