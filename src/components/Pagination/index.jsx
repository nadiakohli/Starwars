import React from 'react';

// Styles
import { Button } from '../styled';

const Pagination = ({
  handleData,
  countPages,
  perPage,
  currentPage,
}) => {

  const handleClick = (event) => {
    handleData(Number(event.target.id));
  };

  const count = Math.ceil(countPages / perPage);

  const handleNextPage = () => {
    if (currentPage < count) {
      handleData(currentPage + 1);
    };
  };
  

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleData(currentPage - 1);
    };
  };

  const createButtons = () => {
    if (currentPage < 4) {
      return Array.from({ length: count > 5 ? 5 : count }, (_, i) => (
        <Button 
        key={i + 1} 
        id={i + 1}
        onClick={handleClick}
        className={currentPage == i + 1 ? 'active' : null}
        >
          {i + 1}
        </Button>
      ))
    } else if ((count - currentPage) < 2) {
      return Array.from({ length: 5 }, (_, i) => (
        <Button 
          key={i + currentPage - (5 - (count - currentPage) - 1)}
          id={i + currentPage - (5 - (count - currentPage) - 1)}
          onClick={handleClick}
          className={i + currentPage - (5 - (count - currentPage) - 1) === currentPage ? 'active' : null}
        >
          {i + currentPage - (5 - (count - currentPage) - 1)}
        </Button>
      ))
    } else {
      return Array.from({ length: 5 }, (_, i) => (
        <Button 
          key={i + currentPage - 2}
          id={i + currentPage - 2}
          onClick={handleClick}
          className={currentPage == i + currentPage - 2 ? 'active' : null}
        >
          {i + currentPage - 2}
        </Button>
      ))
    }
  }

  return (
    <>
      <Button onClick={handlePrevPage} className={currentPage === 1 ? 'disabled' : ''}>
        {'<'}
      </Button>
      {createButtons()}
      <Button onClick={handleNextPage} className={currentPage == count ? 'disabled' : ''}>
        {'>'}
      </Button>
    </>
  )
};

export default Pagination;
