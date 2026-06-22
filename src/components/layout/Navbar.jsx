import { profile } from "../../data/portfolioData";
import styles from "../../styles/Navbar.module.css";

const LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#manifesto" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.inner} container`}>
        <a href="#top" className={styles.mark}>
          {profile.name}<span className={styles.dot}>.</span>
        </a>
        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
