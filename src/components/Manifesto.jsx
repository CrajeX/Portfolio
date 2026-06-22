import { motion } from "framer-motion";
import { manifesto } from "../data/portfolioData";
import SectionLabel from "./ui/SectionLabel";
import Stamp from "./ui/Stamp";
import styles from "../styles/Manifesto.module.css";

export default function Manifesto() {
  return (
    <section id="manifesto" className={styles.section}>
      <div className={`${styles.grid} container`}>
        <div>
          <SectionLabel>{manifesto.eyebrow}</SectionLabel>
          <motion.h2
            className={styles.headline}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {manifesto.headline.split("\n").map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </motion.h2>
        </div>

        <div className={styles.body}>
          {manifesto.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {p}
            </motion.p>
          ))}
        
        </div>
      </div>
    </section>
  );
}
