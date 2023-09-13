import Image from "next/image";
import styles from "@/styles/components/Icon.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Icon({ url, name }) {
  return (
    <div className={styles.icon_parent}>
      <p className={inter.className}>{name}</p>
      {/* <Image
      // src={`/public/assets/images/about/icons/${url}`}
      src=""
      width={300}
      height={300}
      className={styles.icon}
      alt={name}
    /> */}
    </div>
  );
}
