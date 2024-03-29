import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className={styles.contact}
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>Say Hi! :&#41;</h1>
      <div className={styles.contact_box}>
        <div className={styles.contact_items}>
          <img src="../../assets/mail.svg" alt="" />
          <span>
            <strong>Email</strong>
          </span>
          <span>fmonteiroguerra@gmail.com</span>
        </div>
        <div className={styles.contact_items}>
          <a href="http://linkedin.com/in/felipe-monteirog" target="_blank">
            <img src="../../../assets/linkedin.png" alt="" />
          </a>
          <span>
            <strong>LINKEDIN</strong>
          </span>
          {/* <span>linkedin.com/in/felipe-monteirog</span> */}
        </div>
        <div className={styles.contact_items}>
          <a href="http://github.com/fmonteiroguerra" target="_blank">
            <img src="../../../assets/github.png" alt="" />
          </a>
          <span>
            <strong>GITHUB</strong>
          </span>
          {/* <span>github.com/fmonteiroguerra</span> */}
        </div>
      </div>
      <div className={styles.located}>
        <h1>Located in</h1>
        <p>Ermesinde - Porto Metropolitan Area</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124587.6466060275!2d-8.640809258813686!3d41.195746140328346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24614111b8595d%3A0xcdeb019560b02e0!2sErmesinde!5e0!3m2!1spt-PT!2spt!4v1710933893123!5m2!1spt-PT!2spt"
          width="500"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Contact;
