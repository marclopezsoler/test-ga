"use client";
import styles from "@/styles/NotFound.module.scss";
import { motion } from "framer-motion";
import { Inter, Syne } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Custom404() {
  return (
    <>
      <Head>
        <title>page not found</title>
        <meta
          name="description"
          content="portfolio website of marc lópez created using nextjs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <motion.div
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className={styles.main}>
          <h2 className={`${styles.h2} ${syne.className}`}>Ooops...</h2>
          <h3 className={`${styles.h3} ${inter.className}`}>
            can&apos;t find that page
          </h3>
          <Link href="/" className={`${styles.link} ${syne.className}`}>
            BACK TO HOME
          </Link>
        </div>
      </motion.div>
    </>
  );
}
