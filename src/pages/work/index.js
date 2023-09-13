import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <Head>
        <title>work | marc lópez portfolio</title>
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
        <main className={styles.main}>
          <Link href="/">GO TO HOME</Link>
        </main>
      </motion.div>
    </>
  );
}
