import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`
            px-4 py-2 rounded-md 
            ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}
          `}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;