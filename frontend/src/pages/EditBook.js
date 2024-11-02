import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';

const EditBook = ({ books, onEditBook }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  const handleSubmit = (bookData) => {
    onEditBook({ 
      ...bookData, 
      id: parseInt(id),
      published_year: bookData.publishedYear
    });
    navigate('/');
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="edit-book-page">
      <h1>Edit Book</h1>
      <BookForm book={book} onSubmit={handleSubmit} />
      <button onClick={() => navigate('/')} className="back-button">
        Back to Home
      </button>
    </div>
  );
};

export default EditBook; 