import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Pagination from './Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const [booksPerPage] = useState(10); // Number of books per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?title=${searchQuery}`);
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const  handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-8">
        <h1>My Book Finder App</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      <BookList books={currentBooks} />
      {/* Add the Pagination component here */}
      <Pagination currentPage={currentPage} totalPages={Math.ceil(books.length / booksPerPage)} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;