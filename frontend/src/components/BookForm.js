import React, { useState, useEffect } from 'react';

const BookForm = ({ book, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: '',
    genre: ''
  });

  const [errors, setErrors] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: '',
    genre: ''
  });

  useEffect(() => {
    if (book) {
      setFormData({
        ...book,
        publishedYear: book.published_year || book.publishedYear
      });
      setErrors({
        title: '',
        author: '',
        description: '',
        publishedYear: '',
        genre: ''
      });
    }
  }, [book]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      title: '',
      author: '',
      description: '',
      publishedYear: '',
      genre: ''
    };

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    // Author validation
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
      isValid = false;
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    // Published Year validation
    if (!formData.publishedYear) {
      newErrors.publishedYear = 'Published year is required';
      isValid = false;
    } else {
      const year = parseInt(formData.publishedYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1000 || year > currentYear) {
        newErrors.publishedYear = `Year must be between 1000 and ${currentYear}`;
        isValid = false;
      }
    }

    // Genre validation
    if (!formData.genre.trim()) {
      newErrors.genre = 'Genre is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{book ? 'Edit Book' : 'Add New Book'}</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div className="form-group">
        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <span className="error">{errors.author}</span>}
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      <div className="form-group">
        <label>Published Year:</label>
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        {errors.publishedYear && <span className="error">{errors.publishedYear}</span>}
      </div>
      <div className="form-group">
        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        {errors.genre && <span className="error">{errors.genre}</span>}
      </div>
      <button type="submit">{book ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default BookForm;