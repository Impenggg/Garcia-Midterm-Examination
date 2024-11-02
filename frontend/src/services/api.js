const API_BASE_URL = 'http://localhost:8000/api';

export const bookService = {
    async getAllBooks() {
        const response = await fetch(`${API_BASE_URL}/books`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch books');
        }
        return response.json();
    },

    async getBook(id) {
        const response = await fetch(`${API_BASE_URL}/books/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch book');
        }
        return response.json();
    },

    async createBook(book) {
        const response = await fetch(`${API_BASE_URL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...book,
                published_year: parseInt(book.publishedYear),
                genre: book.genre || 'Fiction' // Default genre if not provided
            }),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create book');
        }
        return response.json();
    },

    async updateBook(id, book) {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...book,
                published_year: parseInt(book.publishedYear),
                genre: book.genre || 'Fiction'
            }),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to update book');
        }
        return response.json();
    },

    async deleteBook(id) {
        const response = await fetch(`${API_BASE_URL}/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete book');
        }
    }
}; 