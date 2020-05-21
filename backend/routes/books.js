const { Router } = require('express');
const router = Router();
const {unlink} = require('fs-extra'); // soporte para promesas 
const path = require('path');

// Requerir el modelo de datos que creamos
const Book = require('../models/Book');

router.get('/', async (req, res) =>{
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const {title, author, isbn} = req.body;
    const imagePath = '/uploads/' + req.file.filename
    const newBook = new Book({title, author, isbn, imagePath})
    // console.log(newBook) - para ver que estoy enviando en el body
    await newBook.save();
    res.json({message: 'Book saved'});
});

router.delete('/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    console.log(book);
    unlink(path.resolve('./backend/public' + book.imagePath ))
    res.json({message: 'Book delete'});
});

module.exports = router;