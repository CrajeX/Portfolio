import { motion } from "framer-motion";
import { stack } from "../data/portfolioData";
import SectionLabel from "./ui/SectionLabel";
import styles from "../styles/Stack.module.css";

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className="container">
        <SectionLabel>{stack.eyebrow}</SectionLabel>
        <h2 className={styles.headline}>{stack.headline}</h2>

        <div className={styles.grid}>
          {stack.groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul className={styles.itemList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
