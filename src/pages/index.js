import Highlight from "@/components/Highlight";
import MyBest from "@/components/MyBest";
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";
import { Inter, Syne } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
          content="portfolio website of marc lópez. Discover all his projects and experience here!"
        />
        <meta name="keywords" content="marc lópez soler, portfolio, full stack, digital artist, barcelona" />
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
          <section className={`${styles.home_section_1} ${syne.className}`}>
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
              marc lópez is a digital artist and developer from Barcelona, he&apos;s
              keen on creating cool and simple stuff
            </h2>
          </section>
          <section className={styles.home_section_2}>
            <h2 className={`${styles.subtitle_part2} ${syne.className}`}>what I do best</h2>
            <p className={`${styles.p} ${inter.className}`}>These are some aspects I excel at, for further detail, go to the about section!</p>
            <div className={styles.best_parent}>
              <MyBest title={"Generative art & Immersive experiences"} />
              <MyBest title={"Front End Developing"} />
              <MyBest title={"Responsive Web & Apps"} />
              <MyBest title={"Graphic Design"} />
              <MyBest title={"Photography"} />
              <MyBest title={"SEO, Google Analytics and MyBusiness"} />
            </div>
          </section>
          <section className={styles.home_section_3}>
            <div className={styles.highlight_container}>
              <h2 className={`${styles.h2} ${syne.className}`}>highlighted projects</h2>
              <p className={`${styles.p} ${inter.cl}`}>Check out a few highlighted projects, if you want to explore more of them, go to the work section!</p>
              <div className={styles.highlight_parent}>
                <Highlight
                  title={`neuragest`}
                  filename_small={`pollock.png`}
                  short_name={`tfg`}
                  subtitle={`interactive exhibition`}
                  link={`work5`}
                  selected={1}
                />
                <Highlight
                  title={`happenin' app`}
                  filename_small={`happenin.jpg`}
                  short_name={`happenin`}
                  subtitle={`events mobile app`}
                  link={`work4`}
                  selected={2}
                />
              </div>
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
