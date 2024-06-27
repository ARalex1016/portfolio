import styles from "./Input.module.css";

const Input = ({
  type = "text",
  name,
  value,
  placeholder,
  action,
  isTextarea = false,
}) => {
  if (isTextarea) {
    return (
      <>
        <textarea
          name={name}
          value={value}
          className={styles.inputField}
          rows="5"
          placeholder={placeholder}
          onChange={action}
          required
        ></textarea>
      </>
    );
  }

  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        className={styles.inputField}
        placeholder={placeholder}
        onChange={action}
        required
      />
    </>
  );
};

export default Input;
