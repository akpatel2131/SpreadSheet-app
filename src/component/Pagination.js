// Pagination.js
import React from 'react';
import useStore from './useStore';

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useStore();

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="border p-2"
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="border p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
