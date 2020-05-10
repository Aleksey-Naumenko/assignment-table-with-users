import React from "react";

const Pagination = ({ page, onNextPage, onPrevPage }) => {
  return (
    <tfoot className="users-table__footer">
      <tr>
        <td>
          <button onClick={() => onPrevPage()}>Prev page</button>
        </td>
        <td>
          <span>{page}</span>
        </td>
        <td>
          <button onClick={() => onNextPage()}>Next page</button>
        </td>
      </tr>
    </tfoot>
  );
};

export default Pagination;
