// Styles
import styles from "./Skills.module.css";

// Data (json)
import skills from "../../data/skills.json";

// React npmjs
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Components
import AnimatedProgressbar from "./AnimatedProgressBar";

// Images
// import htmlImg from "../../assets/skillsImg/html.png";
// import cssImg from "../../assets/skillsImg/css.png";
// import jsImg from "../../assets/skillsImg/js.png";
// import reactImg from "../../assets/skillsImg/react.png";

// const skills = [
//   {
//     title: "HTML",
//     imageSrc: htmlImg,
//     percentage: "80",
//   },
//   {
//     title: "CSS",
//     imageSrc: cssImg,
//     percentage: "60",
//   },
//   {
//     title: "JS",
//     imageSrc: jsImg,
//     percentage: "70",
//   },
//   {
//     title: "React JS",
//     imageSrc: reactImg,
//     percentage: "40",
//   },
// ];

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section id="skills" className={styles.skills}>
        <h2>Skills</h2>
        <p>
          Technologies and tools that I use to create such awesome websites.
        </p>
        <Carousel
          className={styles["skill-slider"]}
          responsive={responsive}
          infinite={true}
          draggable={false}
        >
          {skills.map((skill, index) => {
            return (
              <AnimatedProgressbar
                key={index}
                title={skill.title}
                percentage={skill.percentage}
                image={skill.imageSrc}
              />
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Skills;
