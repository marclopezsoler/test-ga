"use client";
import styles from "@/styles/components/Popup.module.scss";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Popup() {
  const [popup, setPopup] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("popup");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    localStorage.setItem("popup", count);

    setPopup(count);
  }, []);

  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={`${styles.popup} ${popup != 1 ? styles.animate : ""}`}>
        <p>
          For a better experience, use a desktop or laptop to explore this site.
        </p>
      </div>
    </div>
  );
}
