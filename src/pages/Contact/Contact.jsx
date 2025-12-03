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
      <h1>Feel free to say Hi! :&#41;</h1>
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
          <a href="http://linkedin.com/in/felipe-monteirog" target="_blank">
            <span>
              <strong>LINKEDIN</strong>
            </span>
          </a>
        </div>
        <div className={styles.contact_items}>
          <a href="http://github.com/fmonteiroguerra" target="_blank">
            <img src="../../../assets/github.png" alt="" />
          </a>
          <a href="http://github.com/fmonteiroguerra" target="_blank">
            <span>
              <strong>GITHUB</strong>
            </span>
          </a>
        </div>
      </div>
      <div className={styles.located}>
        <h1>Location:</h1>
        <p>Porto - PORTUGAL</p>

        <img src="../../../assets/portobridge.png" alt="porto-picture" width="500"
          height="350"
          loading="lazy"/>
        
      </div>
    </motion.div>
  );
};

export default Contact;
