import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

const AddBook = ({ onAddBook }) => {
  const navigate = useNavigate();

  const handleSubmit = (bookData) => {
    onAddBook(bookData);
    navigate('/');
  };

  return (
    <div className="add-book-page">
      <h1>Add New Book</h1>
      <BookForm onSubmit={handleSubmit} />
      <button onClick={() => navigate('/')} className="back-button">
        Back to Home
      </button>
    </div>
  );
};

export default AddBook; 