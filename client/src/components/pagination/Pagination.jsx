import "./pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const firstHandler = () => {
    if (currentPage > 1) {
      onPageChange((currentPage = 1));
    }
  };
  const prevHandler = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const lastHandler = () => {
    if (currentPage < totalPages) {
      onPageChange((currentPage = totalPages));
    }
  };

  return (
    <div className="pagination">
      <button onClick={firstHandler} name="first" disabled={currentPage === 1}>
        {"|<"}
      </button>
      <button onClick={prevHandler} name="prev" disabled={currentPage === 1}>
        {"<"}
      </button>
      <p>
        {currentPage}/{totalPages}
      </p>
      <button
        onClick={nextHandler}
        name="next"
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
      <button
        onClick={lastHandler}
        name="last"
        disabled={currentPage === totalPages}
      >
        {">|"}
      </button>
    </div>
  );
};

export default Pagination;
