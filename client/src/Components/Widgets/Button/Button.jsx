import styles from "./Button.module.css";

const Button = ({ label, action, url, downloadable = false }) => {
  if (url) {
    return (
      <>
        <button className={styles.button} onClick={action}>
          <a
            href={url}
            download={downloadable ? "cvAslam.pdf" : undefined}
            target="_blank"
            rel="noreferrer"
          >
            <p>{label}</p>
          </a>
        </button>
      </>
    );
  }

  return (
    <>
      <button className={styles.button}>
        <p>{label}</p>
      </button>
    </>
  );
};

export default Button;
