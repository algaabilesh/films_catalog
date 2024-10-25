import { FC } from "react";
import styles from "./user-profile.module.css";

const UserProfile: FC = () => {

  return (
    <div className={styles.userProfileContainer}>
        <img src="/images/user.svg" alt="user-profile" /> 
        <span>Your Name</span>
    </div>
  );
};

export default UserProfile;