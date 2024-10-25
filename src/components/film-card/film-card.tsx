import { FC } from "react";
import styles from "./film-card.module.css";

type FilmCardProps = {
  film: Film;
};

const FilmCard: FC<FilmCardProps> = ({ film }) => {
  const { title, year, imdbID, type, posterURL } = film;

  const fallbackPosterURL = "/images/fallback-image.svg";

  return (
    <a href="#" className={styles.cardContainer}>
      <article>
        <img
          className={styles.filmAvatar}
          src={posterURL !== "N/A" ? posterURL : fallbackPosterURL}
          alt="avatar"
        />
        <dl className={styles.filmInfo}>
          <dt>Name</dt>
          <dd>{title}</dd>
          <dt>Year</dt>
          <dd>{year}</dd>
          <dt>imdbID</dt>
          <dd>{imdbID}</dd>
          <dt>Type</dt>
          <dd>{type}</dd>
        </dl>
      </article>
    </a>
  );
};

export default FilmCard;
