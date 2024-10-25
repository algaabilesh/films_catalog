import { FC, useState } from "react";
import styles from "./films-list.module.css";
import FilmCard from "../film-card";
import ReactPaginate from "react-paginate";

type FilmsListProps = {
  films: Film[];
  totalResults: string;
  onPageClick: (offset: number) => void;
};

const FilmsList: FC<FilmsListProps> = ({
  films,
  totalResults,
  onPageClick,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentFilms = films.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(parseInt(totalResults) / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % films.length;
    setItemOffset(newOffset);
    onPageClick(event.selected + 1);
  };

  return (
    <>
      <section className={styles.filmsListContainer}>
        {currentFilms.map((film) => (
          <FilmCard key={film.imdbID} film={film} />
        ))}
      </section>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        className={styles.reactPaginate}
      />
    </>
  );
};

export default FilmsList;
