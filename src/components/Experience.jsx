import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";
import SectionLabel from "./ui/SectionLabel";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <SectionLabel>{experience.eyebrow}</SectionLabel>
        <h2 className={styles.headline}>{experience.headline}</h2>

        <div className={styles.list}>
          {experience.items.map((item, i) => (
            <motion.div
              key={item.role + i}
              className={styles.row}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className={styles.roleCol}>
                <h3 className={styles.role}>{item.role}</h3>
                {item.org && <span className={styles.org}>{item.org}</span>}
              </div>
              <p className={styles.summary}>{item.summary}</p>
              {item.period && <span className={styles.period}>{item.period}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
