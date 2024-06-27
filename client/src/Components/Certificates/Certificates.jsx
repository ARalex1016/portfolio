// Data (json)
import myDetails from "../../data/myDetails.json";

// Styles
import styles from "./Certificates.module.css";

// React npmjs
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Certificates = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section id="certificates" className={styles.certificates}>
        <h2>Certificates</h2>

        <Carousel
          className={styles.carousel}
          responsive={responsive}
          infinite={true}
          draggable={false}
        >
          {myDetails.certificates.map((certificate) => {
            return (
              <div className={styles.course}>
                <h3>{certificate.course}</h3>

                <p>
                  <b>Completed on:</b>{" "}
                  <span>{certificate.completion_date}</span>
                </p>

                <img
                  src={require(`./../../assets${certificate.imgSrc}`)}
                  alt="img"
                />
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Certificates;
