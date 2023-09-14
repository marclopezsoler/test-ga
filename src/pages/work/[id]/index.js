"use client";
import styles from "@/styles/WorkDetail.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ImageComponent from "@/components/ImageComponent";
import NextWork from "@/components/NextWork";
import works from "@/data/data";
import { Inter, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function WorkDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const work = id ? works.find((work) => work.id === id) : null;

  if (!work) {
    return <div>Work not found</div>;
  }

  let nextWorkNum = 1;

  const highestNum = works.reduce(
    (max, work) => (work.num > max ? work.num : max),
    0
  );

  if (highestNum === work.num) {
    nextWorkNum = 1;
  } else {
    nextWorkNum = work.num + 1;
  }

  return (
    <>
      <Head>
        <title>{work.title} | marc lópez portfolio</title>
        <meta
          name="description"
          content="discover this work and many more here!"
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
        <main className={styles.work_detail}>
          <section className={styles.landing_container}>
            <div
              className={styles.bg_image}
              style={{
                backgroundImage: `url(/assets/images/work/${work.id}/image1.jpg)`,
              }}
            >
              <div className={styles.main_gradient}></div>
              <div className={styles.landing_text}>
                <h1 className={syne.className}>{work.title}</h1>
              </div>
            </div>
          </section>
          <section className={styles.first_section}>
            <div className={styles.work_type}>
              <span className={syne.className}>{work.type}</span>
            </div>
            <div className={styles.detail_content}>
              <div className={styles.info}>
                <h2 id={`${styles.subtitle} ${"0"}`} className={`${styles.subtitle} ${syne.className}`}>
                  {work.subtitle1}
                </h2>
                <p className={`${styles.description} ${inter.className}`} id={`${styles.p}`}>
                  {work.description}
                </p>
              </div>
              <div className={styles.details}>
                <div className={work.roles ? "" : styles.hide}>
                  <span id={`${styles.span} ${"1"}`} className={syne.className}>roles</span>
                  <p id={`${styles.p} ${"1"}`} className={inter.className}>{work.roles}</p>
                </div>
                <div className={work.date ? "" : styles.hide}>
                  <span id={`${styles.span} ${"2"}`} className={syne.className}>date</span>
                  <p id={`${styles.p} ${"2"}`} className={inter.className}>{work.date}</p>
                </div>
                <div className={work.client ? "" : styles.hide}>
                  <span id={`${styles.span} ${"3"}`} className={syne.className}>client</span>
                  <p id={`${styles.p} ${"3"}`} className={inter.className}>{work.client}</p>
                </div>
                <div>
                  <span
                    id={`${styles.span} ${"4"}`}
                    className={`${work.link === "" ? styles.hide : ""} ${syne.className}`}
                  >
                    link
                  </span>
                  <a
                    href={work.link}
                    id={`${styles.p} ${"4"}`}
                    target="_blank"
                    className={`${work.link === "" ? styles.hide : ""} ${inter.className}`}
                  >
                    {work.short_link}
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.images_group}>
              <ImageComponent
                workId={work.id}
                image_alt={work.image2_alt}
                numberImg={2}
              />
              <ImageComponent
                workId={work.id}
                image_alt={work.image3_alt}
                numberImg={3}
              />
              <ImageComponent
                workId={work.id}
                image_alt={work.image4_alt}
                numberImg={4}
              />
              <div className={styles.two_images}>
                <ImageComponent
                  workId={work.id}
                  image_alt={work.image5_alt}
                  numberImg={5}
                />
                <ImageComponent
                  workId={work.id}
                  image_alt={work.image6_alt}
                  numberImg={6}
                />
              </div>
              <ImageComponent
                workId={work.id}
                image_alt={work.image7_alt}
                numberImg={7}
              />
            </div>
          </section>
          <NextWork nextWork={nextWorkNum} />
        </main>
      </motion.div>
    </>
  );
}