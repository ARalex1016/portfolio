import styles from "./Clipboard.module.css";

const Clipboard = ({ children, text }) => {
  const copy = () => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        alert(`${text} copied to clipboard`);
      })
      .catch((error) => {
        alert(`Failed to copy ${text}:  ${error}`);
      });
  };

  return (
    <>
      <p className={styles.para} onClick={copy}>
        {children}
      </p>
    </>
  );
};

export default Clipboard;
