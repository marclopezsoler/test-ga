"use client";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/Contact.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Inter, Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [contactLoads, setContactLoads] = useState(0);

  useEffect(() => {
    let count = sessionStorage.getItem("contactLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("contactLoads", count);

    setContactLoads(count);
  }, []);

  return (
    <>
      <Head>
        <title>contact | marc lópez portfolio</title>
        <meta
          name="description"
          content="get in contact with me or send me a private message via any social account"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <motion.div
        className="container text-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <main className={styles.main}>
          <div className={styles.contact_page}>
            <section
              className={`${styles.first_part} ${
                contactLoads === 1 ? "" : ""
              }`}
            >
              <h1 className={`${styles.title} ${syne.className}`}>
                let&apos;s get in touch
              </h1>
              <p className={`${styles.subtitle} ${inter.className}`}>
                have something in mind?<br></br>let&apos;s transform your ideas
                into reality together!
              </p>
            </section>
            <section
              className={`${styles.second_part} ${
                contactLoads === 1 ? "" : ""
              }`}
            >
              <ContactForm />
            </section>
          </div>
        </main>
      </motion.div>
    </>
  );
}
