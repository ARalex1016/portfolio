// Styles
import styles from "./Skills.module.css";

// React npmjs
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const AnimatedProgressBar = ({ title, percentage, image }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <div className={styles.itemBar}>
          <CircularProgressbarWithChildren
            className={styles["circular-progressbar"]}
            value={isVisible ? percentage : 0}
          >
            <img
              className={styles.img}
              src={require(`./../../assets${image}`)}
              alt={`${title}_img`}
            />
            <div style={{ fontSize: 20, marginTop: 4 }}>
              <strong>{isVisible ? percentage : 0}%</strong>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      )}
    </VisibilitySensor>
  );
};

export default AnimatedProgressBar;
