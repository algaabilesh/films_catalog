import { FC } from "react";
import styles from "./results-number.module.css";

type ResultsNumberProps = {
    resultsNumber: string;
  };
  

const ResultsNumber: FC<ResultsNumberProps> = ({ resultsNumber }) => {
  return (
    <div className={styles.resultsNumberContainer}>
        <span className={styles.resultsNumber}>
            {resultsNumber} results
        </span>
    </div>
  );
};

export default ResultsNumber;