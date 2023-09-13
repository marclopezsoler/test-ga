import styles from "@/styles/components/Skills.module.scss";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Skills({ title, num }) {
  return (
    <div className={styles.bar}>
      <div className={styles.bar_full} style={{ width: num }}></div>
      <p className={syne.className}>{title}</p>
    </div>
  );
}
