import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className={styles.home_top}>
        <div className={styles.top_text}>
          <h1>Hello, I'm Felipe!</h1>
          <p>Frontend Developer</p>

          <a
            className={styles.cv}
            href="../../../assets/cv-felipe-monteiro-frontend-dev.pdf"
            download
          >
            Download CV
          </a>
          <div className={styles.home_links}>
            <a href="http://linkedin.com/in/felipe-monteirog" target="_blank">
              <img
                className={styles.links_home}
                src="../../../assets/linkedin.png"
                alt=""
              />
            </a>
            <a href="http://github.com/fmonteiroguerra" target="_blank">
              <img
                className={styles.links_home}
                src="../../../assets/github.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <img
          className={styles.profile}
          src="/myphoto.jpg"
          alt="photo Felipe Monteiro Frontend Developer"
        />
      </div>

      <div className={styles.aboutme_box}>
        <h1>About me</h1>
        <p>
          With experience in high-performance projects and intuitive interfaces,
          My focus is on delivering solutions that optimize processes and
          provide significant results for companies.
         
        </p>
        <p>
          Holding a strong foundation in
          HTML, CSS, JavaScript and modern frameworks like React, I transform ideas into interactive and
          engaging digital experiences.
        </p>
      </div>
      <div className="mylinks">
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
