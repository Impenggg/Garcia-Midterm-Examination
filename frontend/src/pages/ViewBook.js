import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookDetails from '../components/BookDetails';

const ViewBook = ({ books }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="view-book-page">
      <h1>Book Details</h1>
      <BookDetails book={book} onClose={() => navigate('/')} />
    </div>
  );
};

export default ViewBook; 