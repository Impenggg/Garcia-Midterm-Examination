import React from 'react';

const BookList = ({ books, onEdit, onDelete, onView }) => {
  return (
    <div className="book-list">
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Published Year:</strong> {book.published_year}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p className="description">{book.description.substring(0, 100)}...</p>
            <div className="book-actions">
              <button className="view-btn" onClick={() => onView(book)}>
                View Details
              </button>
              <button className="edit-btn" onClick={() => onEdit(book)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => onDelete(book.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList; 