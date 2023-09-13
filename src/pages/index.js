import MyBest from "@/components/MyBest";
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";
import { Syne } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const syne = Syne({ subsets: ["latin"] });

export default function Home() {
  const [homeLoads, setHomeLoads] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let count = sessionStorage.getItem("homeLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("homeLoads", count);

    setHomeLoads(count);
  }, []);

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
          <section className={styles.home_section_1}>
            <div className={styles.title_parent}>
              <h1
                className={`${styles.home_title} ${
                  homeLoads === 1 ? styles.animate_titleY : ""
                }`}
              >
                creative
              </h1>
              <div className={styles.title_parent2}>
                <h1
                  className={`${styles.home_title} ${
                    homeLoads === 1 ? styles.animate_titleX2 : ""
                  }`}
                >
                  digital{" "}
                </h1>
                <h1
                  className={`${styles.home_title} ${
                    homeLoads === 1 ? styles.animate_titleX : ""
                  }`}
                >
                  artist
                </h1>
              </div>
            </div>
            <h2
              className={`${styles.home_subtitle} ${
                homeLoads === 1 ? styles.animate_subtitle : ""
              }`}
            >
              marc lópez is a digital artist and developer from Barcelona, he's
              keen on creating cool and simple stuff
            </h2>
          </section>
          <section className={styles.home_section_2}>
            <h2 className={styles.subtitle_part2}>what I do best</h2>
            <p className={styles.p}>
              These are some aspects I excel at, for further detail, go to the
              about section!
            </p>
            <div className={styles.best_parent}>
              <MyBest title={"Front End Developing"} />
              <MyBest title={"Responsive Web & Apps"} />
              <MyBest title={"SEO, Google Analytics and MyBusiness"} />
              <MyBest title={"Graphic Design"} />
              <MyBest title={"UI Design"} />
              <MyBest title={"Social Media managing"} />
            </div>
          </section>
          <section className={styles.home_section_4}>
            <h2 className={styles.section4_title}>
              hey! you got to the bottom
            </h2>
            <p className={styles.section4_subtitle}>
              feel free to explore the other sections
            </p>
          </section>
        </main>
      </motion.div>
    </>
  );
}
