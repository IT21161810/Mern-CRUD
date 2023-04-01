
const Book = require("../models/Book");

//getAllBooks
const getAllBook = async(req,res,next) => {

    let books;
    try{
        books = await Book.find();

    }catch(err) {

        console.log(err);
    }

    if(!books) {
        return res.status(404).json({message: "No Products Found"})
    }
    return res.status(200).json({books})

}


//BookgetBy id
const getById = async(req,res,next) => {
    const id = req.params.id;

    let book;
    
    try {
        book = await Book.findById(id);
    }catch (err) {
        console.log(err);
    }

    if(!book) {
        return res.status(404).json({message: "No Book Found"})
    }
    return res.status(200).json({book})

}


//addBooks
const addBook = async(req,res,next) => {

    const {name,author,description,price,available,image} = req.body
    let book;

    try{

        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
        });
        await book.save();
    } catch(err) {

        console.log(err);
    }

    if(!book) {
        return res.status(500).json({message:"Unable to Add"})
    }

    return res.status(201).json({ book });
}


//UpdatBook
const updateBook = async (req,res,next) => {

    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body
   
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image,
        });

        book = await book.save();
    } catch (err) {
         
        console.log(err);
    }

    if(!book) {
        return res.status(404).json({message:"Unable to Update By this id"});
    }

    return res.status(200).json({ book });

}


//deleteBook
const deleteBook = async(req,res,next) => {

    const id = req.params.id;
    const {name,author,description,price,available} = req.body
    
    let book;
    try{

        book = await Book.findByIdAndRemove(id);
    }
    catch (err) {
        console.log(err);
    }

    if(!book) {
        return res.status(404).json({message:"Unable to Deleted By this id"});
    }

    return res.status(200).json({ message : "Product Deleted Successfully" });

};




exports.getAllBook = getAllBook;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;