import React from "react";
import myphoto from "../../assets/myphoto.jpg";
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
            href="../../../assets/cv-felipe-monteiro-english.pdf"
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
          src={myphoto}
          alt="photo Felipe Monteiro Frontend Developer"
        />
      </div>

      <div className={styles.aboutme_box}>
        <h1>About me</h1>
        <p>
          Hi, my name is Felipe Monteiro, I'm a Creativity Seeker and Frontend
          Developer from Porto, Portugal. I´ve been developing a skill set in a
          range of technologies and frameworks, including React.js and Yii2. 
          {/*  Frontend developer with knowledge in React.js, JavaScript, REST APIs and others technologies. Passionate about developing reusable components. Experience in projects managed using Agile Methodologies. */}
        </p>
        <p>
        I really value clean and easily understandable code. Also I'm passionate
          about UX / UI. And last but not least, I am a proud father of two
          girls.
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
