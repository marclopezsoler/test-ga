import Link from "next/link";
import styles from "@/styles/components/NextWork.module.scss";
import { isMobile } from "react-device-detect";
import { Inter, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function NextWork({ nextWork }) {
  return (
    <div className={styles.main}>
      <p className={`${styles.text} ${inter.className}`}>
        like what you&apos;re seeing?<br></br>take a look at another work{" "}
        <span className={styles.link_parent}>
          <Link
            href={`/work/work${nextWork}`}
            className={`${styles.link} ${syne.className}`}
          >
            here
          </Link>
          !<span className={`${styles.finger} ${isMobile ? styles.hide : ""}`}>👈</span>
        </span>
      </p>
    </div>
  );
}
