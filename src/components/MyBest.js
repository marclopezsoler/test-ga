import styles from "@/styles/components/MyBest.module.scss";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function MyBest({ title }) {
  return (
    <div className={styles.best_container}>
      <p className={`${styles.title} ${syne.className}`}>{title}</p>
    </div>
  );
}
