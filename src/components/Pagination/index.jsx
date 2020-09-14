import React from "react";
//css
import "./styles.scss";

export default function Pagination({
  hentaisPerPage,
  totalHentais,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  console.log(hentaisPerPage, totalHentais);

  for (
    let index = 0;
    index <= Math.ceil(totalHentais / hentaisPerPage);
    index++
  ) {
    pageNumbers.push(index);
    console.log(hentaisPerPage);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) =>
          number !== 0 ? (
            <span
              className={
                currentPage === number
                  ? "chip-container selected-chip"
                  : "chip-container"
              }
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          ) : null
        )}
      </ul>
    </nav>
  );
}
