import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import MyBest from "@/components/MyBest";
import { Syne } from "next/font/google";
import { Inter } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
          <section className={styles.home_section_2}>
            <h2 className={`${styles.subtitle_part2} ${syne.className}`}>what I do best</h2>
            <p className={`${styles.p} ${inter.className}`}>These are some aspects I excel at, for further detail, go to the about section!</p>
            <div className={styles.best_parent}>
              <MyBest title={"Front End Developing"} />
              <MyBest title={"Responsive Web & Apps"} />
              <MyBest title={"SEO, Google Analytics and MyBusiness"} />
              <MyBest title={"Graphic Design"} />
              <MyBest title={"UI Design"} />
              <MyBest title={"Social Media managing"} />
            </div>
          </section>
          <section className={`${styles.home_section_4} ${syne.className}`}>
            <h2 className={styles.section4_title}>hey! you got to the bottom</h2>
            <p className={styles.section4_subtitle}>feel free to explore the other sections</p>
          </section>
        </main>
      </motion.div>
    </>
  );
}
