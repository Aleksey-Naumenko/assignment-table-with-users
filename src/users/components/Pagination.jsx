import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ page, onNextPage, onPrevPage }) => {

  const currentPageOnScreen = page + 1;

  return (
    <tfoot className="users-table__footer">
      <tr>
        <td>
          <button onClick={() => onPrevPage()}>Prev page</button>
        </td>
        <td>
          <span>{currentPageOnScreen}</span>
        </td>
        <td>
          <button onClick={() => onNextPage()}>Next page</button>
        </td>
      </tr>
    </tfoot>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
};

export default Pagination;
