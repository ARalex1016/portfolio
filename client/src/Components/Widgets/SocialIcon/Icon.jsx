// Styles
import styles from "./Icon.module.css";

const Icon = ({ icon: IconComponent, url, border = false }) => {
  return (
    <>
      <div
        className={`${styles.icon} ${
          border ? styles.border : styles.noBorder
        } `}
      >
        <a href={url} target="_blank" rel="noreferrer">
          <IconComponent />
        </a>
      </div>
    </>
  );
};

export default Icon;
