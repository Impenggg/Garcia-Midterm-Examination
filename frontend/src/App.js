import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ViewBook from './pages/ViewBook';
import './App.css';
import { bookService } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await bookService.getAllBooks();
      setBooks(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      const created = await bookService.createBook(newBook);
      setBooks([...books, created]);
      toast.success('Book added successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEditBook = async (updatedBook) => {
    try {
      const updated = await bookService.updateBook(updatedBook.id, updatedBook);
      setBooks(books.map(book => book.id === updated.id ? updated : book));
      toast.success('Book updated successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await bookService.deleteBook(bookId);
      setBooks(books.filter(book => book.id !== bookId));
      toast.success('Book deleted successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home books={books} onDelete={handleDeleteBook} />} />
          <Route path="/add" element={<AddBook onAddBook={handleAddBook} />} />
          <Route path="/edit/:id" element={<EditBook books={books} onEditBook={handleEditBook} />} />
          <Route path="/view/:id" element={<ViewBook books={books} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
