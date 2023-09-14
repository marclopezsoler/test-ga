import styles from "@/styles/Work.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

function WorkCategory({ works, categoryType, hoveredItemId, setHoveredItemId, localX, localY }) {

  return (
    <div id={`${categoryType} ${hoveredItemId}`} className={`${styles.work_type} ${syne.className}`}>
      <h2 className={styles.category_type}>{categoryType}</h2>
      {works.map((work) =>
        work.category === categoryType ? (
          <button
            className={`${styles.workItem} ${
              hoveredItemId === work.id ? styles.opacity : ""
            }`}
            key={work.id}
            onMouseEnter={() => setHoveredItemId(work.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <Link href={`/work/${work.id}`} className={styles.link}>
              <p className={`${styles.title} ${syne.className}`}>
                <span>{work.type}</span>
                <span className={styles.space}>/</span>
                {work.title}
              </p>
            </Link>
            {/* <Image
              src={`/assets/images/work/${work.id}/image1.jpg`}
              width={600}
              height={600}
              className={styles.image}
              style={{
                left: `${localX - 250}px`,
                top: `${localY - 250}px`,
              }}
              alt={work.title}
            /> */}
          </button>
        ) : null
      )}
    </div>
  );
}

export default WorkCategory;