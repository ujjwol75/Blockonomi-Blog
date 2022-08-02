import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi';

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  const [sliceRangeFirst, setSliceRangeFirst] = useState(0)


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page >= 2 ? page - 1 : 1);
    setSliceRangeFirst((page) => page >= 1 ? page - 1 : 0);
  }
  function goToNextPage() {
    if (currentPage >= 3) {
      setSliceRangeFirst(pageNumbers.length > currentPage ? sliceRangeFirst + 1 : 0)
    }
    if (pageNumbers.length > currentPage) {
      setCurrentPage((page) => page + 1)
    } else {
      setCurrentPage(1)
    }
  }


  return (
    <nav>
      <ul className='pagination'>
        <Link href={"#news"}>
          <div className="pagination-item" onClick={goToPreviousPage}><HiOutlineChevronDoubleLeft /></div>
        </Link>
        {pageNumbers?.slice(sliceRangeFirst, sliceRangeFirst + 3)?.map(number => (
          <li key={number} className='pagination-item'>
            <p onClick={() => paginate(number)}
              className={currentPage === number ? 'active' : "page-link"}>
              {number}
            </p>
          </li>
        ))}
        <Link href={"#news"}>
          <div className="pagination-item" onClick={goToNextPage}><HiOutlineChevronDoubleRight /></div>
        </Link>
      </ul>
    </nav>
  );
};

export default Paginate;