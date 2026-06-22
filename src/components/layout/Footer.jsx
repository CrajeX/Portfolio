import HazardDivider from "./HazardDivider";
import { footer } from "../../data/portfolioData";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <HazardDivider />
      <div className={`${styles.inner} container`}>
        <span>{footer.note}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
