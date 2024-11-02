import React from 'react';

const BookDetails = ({ book, onClose }) => {
  return (
    <div className="book-details">
      <div className="book-details-content">
        <h2>{book.title}</h2>
        <div className="detail-row">
          <strong>Author:</strong>
          <span>{book.author}</span>
        </div>
        <div className="detail-row">
          <strong>Published Year:</strong>
          <span>{book.published_year}</span>
        </div>
        <div className="detail-row">
          <strong>Genre:</strong>
          <span>{book.genre}</span>
        </div>
        <div className="detail-row">
          <strong>Description:</strong>
          <p>{book.description}</p>
        </div>
        <button onClick={onClose} className="back-button">
          Back to List
        </button>
      </div>
    </div>
  );
};

export default BookDetails; 