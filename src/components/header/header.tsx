import { FC } from "react";
import SearchBox from "../search-box";
import UserProfile from "../user-profile";
import styles from "./header.module.css";

type HeaderProps = {
  onSearch: (value: string) => void;
};

const Header: FC<HeaderProps> = ( { onSearch }) => {
  return (
    <header className={styles.headerContainer}>
        <a href="/">
          <img src="/images/logo.png" alt="logo" />   
        </a>
        <SearchBox onSearch={onSearch}/>
        <a href="/#">
          <UserProfile />
        </a>
    </header>
  );
};

export default Header;