import React from 'react';

interface IProps {
  page: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const RANGE = 2;

const Pagination: React.FC<IProps> = ({
  page: pageSize,
  currentPage,
  setCurrentPage,
}) => {
  const renderPagination = () => {
    let dotAfter = false;
    let dotBefore = false;

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <button
            className="mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm"
            key={index}
          >
            ...
          </button>
        );
      }
      return null;
    };

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <button
            className="mx-2 cursor-pointer rounded bg-white px-3 py-2 shadow-sm"
            key={index}
          >
            ...
          </button>
        );
      }
      return null;
    };

    return Array(pageSize || 0)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;
        // Render ... button
        if (
          currentPage <= RANGE * 2 + 1 &&
          pageNumber > currentPage + RANGE &&
          pageNumber < pageSize - RANGE + 1
        ) {
          return renderDotBefore(index);
        } else if (
          currentPage > RANGE * 2 + 1 &&
          currentPage < pageSize - RANGE * 2
        ) {
          if (pageNumber < currentPage - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (
            pageNumber > currentPage + RANGE &&
            pageNumber < pageSize - RANGE + 1
          ) {
            return renderDotAfter(index);
          }
        } else if (
          currentPage >= pageSize - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < currentPage - RANGE
        ) {
          return renderDotBefore(index);
        }

        return (
          <button
            key={index}
            className={`mx-2 cursor-pointer rounded  px-3 py-2 shadow-sm ${
              currentPage === pageNumber ? 'bg-[#81afd7]' : ''
            }`}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      });
  };

  return (
    <div className="mt-6 flex flex-wrap justify-center pb-3">
      <button
        className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm ${
          currentPage === 1 ? 'cursor-not-allowed disabled' : ''
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>
      {renderPagination()}
      <button
        className={`mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm ${
          currentPage === pageSize ? 'cursor-not-allowed disabled' : ''
        }`}
        disabled={currentPage === pageSize}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
