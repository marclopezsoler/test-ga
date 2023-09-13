import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Syne } from 'next/font/google'
 
const syne = Syne({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>marc lópez portfolio</title>
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
      <main className={`${styles.main} ${syne.className}`}>
        <Link href="/contact">GO TO CONTACT</Link>
      </main>
      </motion.div>
    </>
  );
}
