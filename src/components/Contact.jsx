import { motion } from "framer-motion";
import { contact, profile } from "../data/portfolioData";
import SectionLabel from "./ui/SectionLabel";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <SectionLabel>{contact.eyebrow}</SectionLabel>

        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {contact.headline.split("\n").map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </motion.h2>

        <p className={styles.subhead}>{contact.subhead}</p>

        <div className={styles.linkRow}>
          <a href={`mailto:${profile.email}`} className={styles.emailLink}>
            {profile.email}
          </a>
        </div>

        <div className={styles.socials}>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
