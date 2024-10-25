import { FC, ChangeEvent, useState } from "react";
import styles from "./search-box.module.css";

type SearchBoxProps = {
  onSearch: (value: string) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleClick();
    }
  };

  const handleClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="search"
        value={searchValue}
        placeholder="Search"
        className={styles.searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className={styles.searchButton}
        onClick={handleClick}
      >
        <img
          className={styles.searchImage}
          src="/images/search.svg"
          alt="search-icon"
        />
      </button>
    </div>
  );
};

export default SearchBox;
