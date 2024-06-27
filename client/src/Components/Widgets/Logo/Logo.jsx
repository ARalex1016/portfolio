// Data (json)
import myDetails from "../../../data/myDetails.json";

// Styles
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      {/* <a href="#" className={styles.logo}>
        {myDetails.logo.toUpperCase()}
      </a> */}
      <button className={styles.logo}>{myDetails.logo.toUpperCase()}</button>
    </>
  );
};

export default Logo;
