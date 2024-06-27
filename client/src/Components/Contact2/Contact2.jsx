// Styles
import styles from "./Contact2.module.css";

// Data
import myDetails from "../../data/myDetails.json";

// Components
import SocialIcon from "../Widgets/SocialIcon/SocialIcon";

const Contact2 = () => {
  return (
    <>
      <section id="contact" className={styles.contact}>
        <div className={styles.contact_right}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>

        <div className={styles.contact_left}>
          <p>{myDetails.email}</p>
          <SocialIcon />
        </div>
      </section>
    </>
  );
};

export default Contact2;
