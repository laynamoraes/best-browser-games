import { useState } from "react"
import "./styles.css"

import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi"

export default function Pagination({
  totalItems,
  currentPage,
  totalPages,
  firstPage,
  previousPage,
  nextPage,
  lastPage,
  disabledFirstPage,
  disabledPrevioustPage,
  disabledNextPage,
  disabledLastPage,
}) {
  return (
    <div className="pagination-container">
      <p className="pagination-text">Mostrando 12 de {totalItems} itens</p>
      <div className="pagination-buttons">
        <p className="pagination-text">
          Página {currentPage} de {totalPages}
        </p>
        <button onClick={firstPage} disabled={disabledFirstPage}>
          <HiOutlineChevronDoubleLeft
            color="#fff"
            size="16px"
            style={{ marginTop: "2px" }}
          />
          <span className="sr-only">Primeira página</span>
        </button>
        <button onClick={previousPage} disabled={disabledPrevioustPage}>
          <HiOutlineChevronLeft
            color="#fff"
            size="16px"
            style={{ marginTop: "2px" }}
          />
          <span className="sr-only">Página anterior</span>
        </button>
        <button onClick={nextPage} disabled={disabledNextPage}>
          <HiOutlineChevronRight
            color="#fff"
            size="16px"
            style={{ marginTop: "2px" }}
          />
          <span className="sr-only">Próxima página</span>
        </button>
        <button onClick={lastPage} disabled={disabledLastPage}>
          <HiOutlineChevronDoubleRight
            color="#fff"
            size="16px"
            style={{ marginTop: "2px" }}
          />
          <span className="sr-only">Última página</span>
        </button>
      </div>
    </div>
  )
}
