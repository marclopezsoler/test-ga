import styles from "@/styles/components/Highlight.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Inter, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Highlight({
  title,
  filename_small,
  filename_big,
  subtitle,
  link,
  selected,
}) {
  const smallImage = require(`/src/assets/images/home/highlighted/${filename_small}`)
  const bigImage = require(`/src/assets/images/home/highlighted/${filename_big}`)

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
          />
          <h3 className={`${styles.subtitle} ${inter.className}`}>{subtitle}</h3>
        </div>
      </div>
      <div
        className={styles.second_part}
        style={{
          backgroundImage: `url(${bigImage.src})`,
        }}
      >
        <span className={`${styles.selected} ${syne.className}`}>
          selected <span className={styles.selected_num}>{selected}/2</span>
        </span>
      </div>
    </Link>
  );
}
