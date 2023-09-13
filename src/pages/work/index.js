import WorkCategory from "@/components/WorkCategory";
import WorkCategoryMobile from "@/components/WorkCategoryMobile";
import works from "@/data/data";
import styles from "@/styles/Work.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Work() {
  const [localX, setLocalX] = useState(0);
  const [localY, setLocalY] = useState(0);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [workLoads, setWorkLoads] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let count = sessionStorage.getItem("workLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("workLoads", count);

    setWorkLoads(count);
  }, []);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      const x = ev.clientX;
      const y = ev.clientY + window.scrollY;
      setLocalX(x);
      setLocalY(y);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <main className={`${styles.main} ${syne.className}`}>
          {!isMobile ? (
            <section className={styles.work_content}>
              <section className={styles.tags_parent}>
                <div className={styles.work_tags}>
                  <a href="#developing">dev</a>
                  <a href="#design">design</a>
                  <a href="#other">other</a>
                </div>
              </section>
              <div className={styles.work_container}>
                <p className={styles.intro_text}>
                  discover a variety of projects, based on category<br></br>
                  click on them for futher detail
                </p>
                <section
                  className={`${styles.work_items} ${
                    workLoads === 1 ? styles.animate_content : ""
                  }`}
                >
                  <WorkCategory
                    works={works}
                    categoryType="developing"
                    {...{ hoveredItemId, setHoveredItemId, localX, localY }}
                  />
                  <WorkCategory
                    works={works}
                    categoryType="design"
                    {...{ hoveredItemId, setHoveredItemId, localX, localY }}
                  />
                  <WorkCategory
                    works={works}
                    categoryType="other"
                    {...{ hoveredItemId, setHoveredItemId, localX, localY }}
                  />
                </section>
              </div>
            </section>
          ) : (
            <section className={styles.work_content_mobile}>
              <section className={styles.tags_parent_mobile}>
                <a href="#developing">dev</a>
                <a href="#design">design</a>
                <a href="#other">other</a>
              </section>
              <section
                className={`${styles.work_items_mobile} ${
                  workLoads === 1 ? styles.animate_content : ""
                }`}
              >
                <WorkCategoryMobile
                  works={works}
                  categoryType="developing"
                  {...{ hoveredItemId, setHoveredItemId, localX, localY }}
                />
                <WorkCategoryMobile
                  works={works}
                  categoryType="design"
                  {...{ hoveredItemId, setHoveredItemId, localX, localY }}
                />
                <WorkCategoryMobile
                  works={works}
                  categoryType="other"
                  {...{ hoveredItemId, setHoveredItemId, localX, localY }}
                />
              </section>
            </section>
          )}
        </main>
      </motion.div>
    </>
  );
}
