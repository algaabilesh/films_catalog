import React, { FC } from "react";
import styles from "./no-results.module.css";

const NoResults: FC = () => {
  return (
    <section className={styles.noResultsContainer}>
      <article>
        <h1>No results Found</h1>
        <p>
          Sorry, but nothing matched your search. Please try searching for another term.
        </p>
      </article>
    </section>
  );
};

export default NoResults;