// Data (json)
import projetcs from "../../data/projects.json";

// Styles
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.projects}>
        <h2 className={styles.title}>Recent Projects</h2>

        {projetcs.map((project, index) => {
          return (
            <div key={index} className={styles.row}>
              <section className={styles.imgSection}>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <img
                    className={styles.img}
                    title="This is additional information."
                    src={require(`./../../assets${project.imageSrc}`)}
                    alt={`${project.title}_img`}
                  />
                </a>
              </section>
              <section className={styles.verticalLine}>
                <span className={styles.circle}></span>
              </section>
              <section className={styles.detailSection}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </section>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
