import styles from "@/styles/components/Highlight.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Inter, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Highlight({
  title,
  filename_small,
  short_name,
  subtitle,
  link,
  selected,
}) {
  const smallImage = require(`/public/assets/images/home/highlighted/${filename_small}`);

  return (
    <Link href={`/work/${link}`} className={styles.highlight_box}>
      <div className={styles.first_part}>
        <div className={styles.first_part_child}>
          <h2 className={`${styles.title} ${syne.className}`}>{title}</h2>
          <Image
            src={smallImage}
            width={350}
            height={350}
            className={styles.highlight_small_image}
            alt={title}
            loading="lazy"
          />
          <h3 className={`${styles.subtitle} ${inter.className}`}>
            {subtitle}
          </h3>
        </div>
      </div>
      <div
        className={`${styles.second_part} ${short_name === 'tfg' ? styles.tfg : styles.happenin}`}
      >
        <span className={`${styles.selected} ${syne.className}`}>
          selected <span className={styles.selected_num}>{selected}/2</span>
        </span>
      </div>
    </Link>
  );
}
