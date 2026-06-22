import { projects } from "../data/portfolioData";
import SectionLabel from "./ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <SectionLabel>{projects.eyebrow}</SectionLabel>
        <h2 className={styles.headline}>{projects.headline}</h2>

        <div className={styles.grid}>
          {projects.items.map((project, i) => (
            <ProjectCard key={project.code} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
