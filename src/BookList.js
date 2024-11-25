import React from 'react';
const BookList = ({ books, error }) => {
  if (error) {
    return <p>Error fetching books: {error.message}</p>;
  }

  return (
    <div className='container' >
      {books.map((book) => (
        <div key={book.key} className="mb-4">
          <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
          <h4>{book.title}</h4>
          <p>Author: {book.author_name}</p>
          <p>First Published: {book.first_publish_year}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default BookList;