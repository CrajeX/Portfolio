import { motion } from "framer-motion";
import styles from "../styles/ProjectCard.module.css";

const statusTone = (status) => {
  if (status === "In Production") return styles.statusActive;
  if (status === "Shipped") return styles.statusShipped;
  return styles.statusDefault;
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <div className={styles.head}>
        <span className={styles.code}>{project.code}</span>
        <span className={`${styles.status} ${statusTone(project.status)}`}>
          {project.status}
        </span>
      </div>

      <h3 className={styles.name}>{project.name}</h3>

      {project.summary && <p className={styles.summary}>{project.summary}</p>}

      {project.details.length > 0 && (
        <ul className={styles.details}>
          {project.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}

      {project.tags.length > 0 && (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}
