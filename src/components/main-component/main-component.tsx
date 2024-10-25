import { FC } from "react";
import SearchTerm from "../search-term";
import ResultsNumber from "../results-number";
import styles from "./main-component.module.css";
import FilmsList from "../films-list";
import Loader from "../loader";
import NoResults from "../no-results";

type MainComponentProps = {
  totalResults: string;
  films: Film[];
  isLoading: boolean;
  isFirstApiCall: boolean;
  searchTerm: string;
  onPageClick: (offset: number) => void;
};

const MainComponent: FC<MainComponentProps> = ({
  totalResults,
  films,
  isLoading,
  isFirstApiCall,
  searchTerm,
  onPageClick,
}) => {
  return (
    <main className={styles.mainContainer}>
      {isLoading && <Loader />}
      {!isFirstApiCall && (
        <>
          <section className={styles.termAndNumberSection}>
            <SearchTerm term={searchTerm} />
            <ResultsNumber resultsNumber={totalResults} />
          </section>
          {totalResults === "0" ? (
            <NoResults />
          ) : (
            <FilmsList
              films={films}
              totalResults={totalResults}
              onPageClick={onPageClick}
            />
          )}
        </>
      )}
    </main>
  );
};

export default MainComponent;
