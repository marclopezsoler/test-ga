import styles from "@/styles/components/Footer.module.scss";
import Link from "next/link";
import { Syne } from 'next/font/google'
 
const syne = Syne({ subsets: ['latin'] })

export default function Footer() {
  return (
    <nav className={styles.footer}>
      <section className={`${styles.footer_row} ${syne.className}`}>
        <Link href="/" className={styles.footer_link} title="Home">Home</Link>
        <Link href="/work" className={styles.footer_link} title="Work">Work</Link>
        <Link href="/about" className={styles.footer_link} title="About">About</Link>
        <Link href="/contact" className={styles.footer_link} title="Contact">Contact</Link>
        <a href="https://www.linkedin.com/in/marc-lopez-soler/" title="linkedin" target="_blank" className={styles.footer_link}>Linkedin</a>
        <a href="https://github.com/marclopezsoler" target="_blank" title="github" className={styles.footer_link}>Github</a>
        <a href="https://www.instagram.com/lopezsmarc/" target="_blank" title="instagram" className={styles.footer_link}>Instagram</a>
        <a href="https://twitter.com/marclopezsoler" target="_blank" title="twitter" className={styles.footer_link}>Twitter</a>
          <a href="https://files.marclopez.xyz/CV_MarcLopez.pdf" target="_blank" title="CV" className={styles.footer_link}>CV</a>
      </section>
      <section className={`${styles.footer_row} ${syne.className}`}>
        <span className={styles.footer_copy}>© 2024 Marc López</span>
      </section>
    </nav>
  );
}
