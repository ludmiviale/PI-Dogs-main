const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const nextHandler = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prevHandler = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={prevHandler} name="prev" disabled={currentPage === 1}>
          {"<<"}
        </button>
        <p>
          {currentPage}/{totalPages}
        </p>
        <button
          onClick={nextHandler}
          name="next"
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;