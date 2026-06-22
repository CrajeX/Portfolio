import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import Stamp from "./ui/Stamp";
import styles from "../styles/Hero.module.css";
import profileImg from "../../src/pic.png";
const lineVariants = {
  hidden: { y: "100%" },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const headlineLines = profile.tagline.split(" ");

  return (
    <section id="top" className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <p className="label">{profile.role} — {profile.location}</p>

        <h1 className={styles.headline}>
         <div className={styles.stampWrap}>
            <Stamp image={profileImg} tone="yellow" size="lg" />
          </div>
          <span className={styles.lineMask}>
            <motion.span
              className={styles.line}
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              CJ NAPOLES
            </motion.span>
          </span>
            {/* <span className={styles.lineMask}>
              <motion.span
                className={styles.line}
                custom={1}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              >
                VIBED.
              </motion.span>
            </span> */}
        </h1>

        <motion.p
          className={styles.subhead}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          {profile.subhead}
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="#projects" className={styles.ctaPrimary}>
            View Work
          </a>
          <a href={profile.resumeUrl} className={styles.ctaSecondary} download>
            Download Résumé
          </a>
        </motion.div>
      </div>

      
    </section>
  );
}
