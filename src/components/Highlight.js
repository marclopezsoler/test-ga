import styles from "@/styles/components/Highlight.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Highlight({
  title,
  filename_small,
  filename_big,
  subtitle,
  link,
  selected,
}) {
  return (
    <Link href={`/work/${link}`} className={styles.highlight_box}>
      <div className={styles.first_part}>
        <div className={styles.first_part_child}>
          <h2 className={styles.title}>{title}</h2>
          <Image
            src={require(`../assets/images/home/highlighted/${filename_small}`)}
            width={350}
            height={350}
            className={styles.highlight_small_image}
            alt={title}
          />
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
      </div>
      <div
        className={styles.second_part}
        style={{
          // backgroundImage: `url('../assets/images/home/highlighted/${filename_big}')`,
        }}
      >
        <span className={styles.selected}>
          selected <span className={styles.selected_num}>{selected}/2</span>
        </span>
      </div>
    </Link>
  );
}
