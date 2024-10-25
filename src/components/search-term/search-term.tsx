import { FC } from "react";
import styles from "./search-term.module.css";

type SearchTermProps = {
    term: string;
  };
  

const SearchTerm: FC<SearchTermProps> = ({term }) => {
  
  return (
    <section className={styles.searchTermContainer}>
      <span>You searched for: </span>
      <span className={styles.searchTerm}>{term}</span>
    </section>
  );
};

export default SearchTerm;