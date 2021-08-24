import React from 'react';
import ReactPaginate from 'react-paginate';

interface IProps {
  forcePage: number;
  pageCount: number;
  pageRangeDisplayed: number;
  onPageChange: ({ selected: number }) => void;
}

const Pagination = ({
  forcePage,
  pageCount,
  pageRangeDisplayed,
  onPageChange,
}: IProps) => (
  <div className="mt-5 mb-5">
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      marginPagesDisplayed={5}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      activeClassName="active"
      previousLabel="prev"
      nextLabel="next"
      breakLabel="..."
      breakClassName="break-me"
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-link"
      nextClassName="page-link"
      disabledClassName="page-item disabled"
    />
  </div>
);

export default Pagination;
