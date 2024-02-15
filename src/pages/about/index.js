import Icon from "@/components/Icon";
import Skills from "@/components/Skills";
import styles from "@/styles/About.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Inter, Syne } from "next/font/google";
import Image from "next/image";
import profileImage from "/public/assets/images/about/profile_pic.png";
import bgImage from "/public/assets/images/about/profile_bg.JPG";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [count, setContactLoads] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.innerHeight;
      const y = window.scrollY - height;
      setScrollY(y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const combinedTop = `calc(20% + ${0.3 * scrollY}px)`;

  const styleBg = {
    top: combinedTop,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    "and I'm a full stack developer",
    "and I'm a generative artist",
    "and I'm a community manager",
    "and I'm a graphic designer",
    "and I'm a content creator",
  ];

  let index = 0;

  useEffect(() => {
    const change = () => {
      const element = document.getElementById("word");
      if (element) {
        element.innerHTML = values[index];
        index = ++index % values.length;
      }
    };

    const intervalId = setInterval(change, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let count = sessionStorage.getItem("aboutLoads");
    if (count === null) {
      count = 1;
    } else {
      count = Number(count) + 1;
    }
    sessionStorage.setItem("aboutLoads", count);

    setContactLoads(count);
  }, []);

  return (
    <>
      <Head>
        <title>about | marc lópez portfolio</title>
        <meta
          name="description"
          content="get to know marc lópez's background and experience"
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
          <div
            className={`${styles.content} ${
              count === 1 ? styles.animate_page : ""
            }`}
          >
            <div className={styles.first_content_parent}>
              <section className={styles.first_content}>
                <div className={styles.text_parent}>
                  <h1 className={`${styles.title} ${syne.className}`}>
                    IT&apos;S ME,<br></br>
                    <b className={styles.bold}>marc lópez</b>
                  </h1>
                  <p className={`${styles.tag} ${inter.className}`} id="word">
                    full stack developer
                  </p>
                </div>
                <Image
                  src={profileImage}
                  width={300}
                  height={300}
                  className={`${styles.image} ${inter.className}`}
                  alt="profile image marc lópez"
                  title="profile image marc lópez"
                />
              </section>
            </div>
            <section
              className={styles.second_content}
              style={{
                backgroundImage: `url(${bgImage.src})`,
              }}
            >
              <p style={styleBg} className={syne.className}>
                I use my passion and skills to create visually appealing
                products and experiences.<br></br>
                <br></br>been working in the creative industry for the past two
              </p>
            </section>
            <section className={styles.third_section}>
              <div className={styles.about}>
                <h2 className={syne.className}>who am I?</h2>
                <p className={inter.className}>
                  a multimedia bachelor graduate with a strong passion for
                  combining <i>coding</i> and <i>design</i>.
                  <br></br>
                  <br></br>
                  <h3>
                    <i>professional journey and current role</i>
                  </h3>
                  my journey began managing daily brand designs and social media
                  content for The Sideline football account.<br></br>
                  <br></br>Later, I interned as a video editor, gaining
                  expertise in video editing and file management.<br></br>
                  <br></br>Now, I&apos;ve evolved into a multimedia developer,
                  building websites from scratch, designing promotional
                  materials, managing social media, and analyzing web and social
                  traffic.
                  <br></br>
                  <br></br>
                  <h3>
                    <i>immersive experiences</i>
                  </h3>
                  I&apos;ve led projects like immersive videomapping, played
                  around with mapping software, and now, my big thing is
                  creating immersive experiences and interactive exhibitions
                  using generative art. I&apos;m currently in an advanced phase
                  of{" "}
                  <Link href={`/work/work5`} className={styles.linkword} title="neuragest">
                    neuragest
                  </Link>
                </p>
              </div>
              <div className={styles.skills_parent}>
                <h2 className={syne.className}>skills</h2>
                <div className={styles.skills}>
                  <Skills title={"front-end"} num="90%" />
                  <Skills title={"back-end"} num="75%" />
                  <Skills title={"generative art"} num="80%" />
                  <Skills title={"image postprocessing"} num="90%" />
                  <Skills title={"graphic design"} num="85%" />
                  <Skills title={"UI design"} num="85%" />
                  <Skills title={"SEO"} num="80%" />
                  <Skills title={"social media"} num="90%" />
                </div>
              </div>
              <div className={styles.tools}>
                <h2 className={syne.className}>tools</h2>
                <div className={styles.tools_child}>
                  <h3 className={`${styles.h3} ${syne.className}`}>
                    digital arts
                  </h3>
                  <div className={styles.tools_icon}>
                    <Icon url={"processing.png"} name="processing" title="processing"/>
                    <Icon url={"p5js.png"} name="p5.js" title="p5.js"/>
                    <Icon url={"resolume.jpg"} name="resolume" title="resolume"/>
                    <Icon url={"mad.jpg"} name="mad mapper" title="mad mapper"/>
                  </div>
                </div>
                <div className={styles.tools_child}>
                  <h3 className={`${styles.h3} ${syne.className}`}>
                    developing
                  </h3>
                  <div className={styles.tools_icon}>
                    <Icon url={"javascript.png"} name="javascript" title="javascript"/>
                    <Icon url={"sass.png"} name="sass" title="sass"/>
                    <Icon url={"tailwind.jpg"} name="tailwind" title="tailwind"/>
                    <Icon url={"php.svg"} name="php" title="php"/>
                    <Icon url={"mysql.svg"} name="mysql" title="mysql"/>
                    <Icon url={"nextjs.png"} name="next.js" title="next.js"/>
                    <Icon url={"nodejs.png"} name="node.js" title="node.js"/>
                    <Icon url={"git.png"} name="git" title=""/>
                  </div>
                </div>
                <div className={styles.tools_child}>
                  <h3 className={`${styles.h3} ${syne.className}`}>
                    design & photography
                  </h3>
                  <div className={styles.tools_icon}>
                    <Icon url={"figma.png"} name="figma" title="figma"/>
                    <Icon url={"illustrator.png"} name="illustrator" title="illustrator"/>
                    <Icon url={"lightroom.png"} name="lightroom" title="lightroom"/>
                    <Icon url={"photoshop.png"} name="photoshop" title="photoshop"/>
                    <Icon url={"xd.png"} name="adobe xd" title="adobe xd"/>
                  </div>
                </div>
                <div className={styles.tools_child}>
                  <h3 className={`${styles.h3} ${syne.className}`}>others</h3>
                  <div className={styles.tools_icon}>
                    <Icon url={"mailchimp.jpg"} name="mailchimp" title="mailchimp"/>
                    <Icon url={"analytics.png"} name="analytics" title="analytics"/>
                    <Icon url={"mybusiness.jpg"} name="my business" title="my business"/>
                    <Icon url={"firebase.png"} name="firebase" title="firebase"/>
                  </div>
                </div>
              </div>
              <div className={styles.hobbies}>
                <h2 className={syne.className}>hobbies</h2>
                <p className={inter.className}>
                  apart from designing and developing, there are three things I
                  truly love doing in my spare time<br></br>
                  <br></br>
                  <b>photography</b>,<br></br>
                  <br></br>
                  <b>basketball</b>
                  <br></br>
                  <br></br>and...<br></br>
                  <br></br>
                  <b>generative art</b>
                  <br></br>
                  <br></br>the first two hobbies help me disconnect from the
                  daily routine, and also help me improve my creative skills (in
                  photohtaphy) and show me how to be better while working with
                  other people (basketball).
                  <br></br>
                  <br></br>finally, generative art is a hobby I recenlty
                  discovered, and helps me connect coding and design on a really
                  interesting way. I&apos;m sure you&apos;ll hear about me soon
                  talking more and more about generative art!
                </p>
              </div>
              <div className={`${styles.contact} ${syne.className}`}>
                <p>
                  do you want to know more about me?<br></br>then, let&apos;s
                  get in touch
                </p>
                <Link href="/contact" className={styles.link} title="contact">
                  CONTACT ME
                </Link>
              </div>
            </section>
          </div>
        </main>
      </motion.div>
    </>
  );
}
