import { motion } from "framer-motion";
import styles from "../../styles/Stamp.module.css";
export default function Stamp({
  text,
  image,
  tone = "red",
  size = "md",
}) {
  return (
    <motion.div
      className={`${styles.stamp} ${styles[tone]} ${styles[size]}`}
      initial={{ scale: 1.6, opacity: 0 }}
      whileInView={{ scale: 1.2, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
    >
      {image ? (
        <img src={image} alt="" className={styles.stampImage} />
      ) : (
        text
      )}
    </motion.div>
  );
}