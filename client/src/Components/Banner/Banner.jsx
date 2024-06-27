import { useEffect, useState, useCallback } from "react";

// Data (json)
import myDetails from "../../data/myDetails.json";

// Assets
import bannerImg4 from "../../assets/bannerImg/bannerImg4.png";
import myResume from "../../assets/myCv/MyResume.pdf";

// Component
import SocialIcon from "../Widgets/SocialIcon/SocialIcon";
import Button from "../Widgets/Button/Button";

// Styles
import styles from "./Banner.module.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const info = myDetails.profession;
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % info.length;
    let fullText = info[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((pre) => pre / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text.length, info]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <>
      <section id="home" className={styles.home}>
        <div className={styles["home-img"]}>
          <img src={bannerImg4} alt="hero_image" />
        </div>

        <div className={styles["home-content"]}>
          <h1>
            Hi! It's <span>{myDetails.name}!</span>
          </h1>
          <h3 className={styles["typing-text"]}>
            I'm a <span>{text}</span>
            <span className={styles["typing-cursor"]}>|</span>
          </h3>
          <p>
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever.
          </p>

          <SocialIcon />

          <div className={styles["home-button"]}>
            <Button
              url={myResume}
              label={"Download CV"}
              downloadable={true}
              fileName={"cvAslam.pdf"}
            />
            <Button url={"#contact"} label={"Contact Me"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
