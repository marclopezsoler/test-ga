import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/components/ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_den3687",
        "template_09dolbz",
        form.current,
        "_orKLMljXleg5Zowm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setSent(true);
          setTimeout(() =>{
            setSent(false);
          }, "3000");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.main}>
      <div>
        <label>Name *</label>
        <input
          type="text"
          name="user_name"
          value={name}
          className={styles.name}
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email *</label>
        <input
          type="email"
          name="user_email"
          value={email}
          className={styles.email}
          placeholder="Enter yout email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message *</label>
        <textarea
          name="message"
          value={message}
          className={styles.message}
          placeholder="Say something..."
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className={styles.button_parent}>
        <input type="submit" value="SEND MESSAGE" className={styles.button} />
      </button>
      <p className={`${styles.sent} ${sent ? styles.show : ""}`}>Your message has been successfully sent!</p>
    </form>
  );
}
