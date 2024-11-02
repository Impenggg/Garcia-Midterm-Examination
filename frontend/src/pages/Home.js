import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookList from '../components/BookList';

const Home = ({ books, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Book Management System</h1>
      <button onClick={() => navigate('/add')} className="add-button">
        Add New Book
      </button>
      <BookList
        books={books}
        onEdit={(book) => navigate(`/edit/${book.id}`)}
        onDelete={onDelete}
        onView={(book) => navigate(`/view/${book.id}`)}
      />
    </div>
  );
};

export default Home; 