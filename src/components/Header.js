"use client";
import styles from "@/styles/components/Header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { Syne } from 'next/font/google'
 
const syne = Syne({ subsets: ['latin'] })

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <nav className={`${styles.nav_extended}`}>
      <button className={`${styles.toggle} ${syne.className}`} onClick={toggleMenu}>{isMenuOpen ? "x" : "m"}</button>
      <div className={` ${isMenuOpen ? styles.show_element : styles.hide_element} ${styles.nav_menu_parent}`}>
        <div className={`${styles.nav_menu} ${syne.className}`}>
          <Link href="/" title="home" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide1}`} onClick={closeMenu}>home</Link>
          <Link href="/work" title="work" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide2}`} onClick={closeMenu}>work</Link>
          <Link href="/about" title="about" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide3}`} onClick={closeMenu}>about</Link>
          <Link href="/contact" title="contact" className={`${styles.menu_item} ${isMenuOpen ? "" : styles.hide4}`} onClick={closeMenu}>contact</Link>
        </div>
      </div>
    </nav>
    <div className={` ${isMenuOpen ? styles.show_elementBg: styles.hide_elementBg} ${styles.background}`}></div>
    </>
  );
}
