import styles from "../../styles/SectionLabel.module.css";

export default function SectionLabel({ index, children }) {
  return (
    <div className={styles.label}>
      {index ? <span className={styles.index}>{index}</span> : null}
      <span>{children}</span>
    </div>
  );
}
