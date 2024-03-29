import React from "react";
import styles from "./Skills.module.css";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className={styles.skill}
    initial={{x: -1000}}
    animate={{x: 0}}
    exit={{x: window.innerWidth, transition: {duration:0.1}}}
    >
      <div className={styles.skill_tech}>
        <h1>Main Tech Skills</h1>
        <div className={styles.skill_icons}>
          <figure>
            <img src="../../../assets/react-original.svg" alt="" />
            <figcaption>REACT.JS</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/html5.svg" alt="html5 icon" />
            <figcaption>HTML 5</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/css3.svg" alt="css icon" />
            <figcaption>CSS 3</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/javascript.svg" alt="javascript icon" />
            <figcaption>Javascript</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/bs.png" alt="bootstrap icon" />
            <figcaption>Bootstrap5</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/mysql.png" alt="" />
            <figcaption>MySQL</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/php.png" alt="" />
            <figcaption>PHP</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/yii.png" alt="" />
            <figcaption>Yii2</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/git.svg" alt="git icon" />
            <figcaption>Git</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/github.svg" alt="github icon" />
            <figcaption>Github</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/adobexd.png" alt="adobe xd icon" />{" "}
            <figcaption>Adobe XD</figcaption>
          </figure>
          <figure>
            <img src="../../../assets/wordpress.png" alt="" />
            <figcaption>Wordpress</figcaption>
          </figure>
        </div>
      </div>

      <div className={styles.skill_languages}>
        <h1>Languages</h1>
        <div className={styles.skill_icons}>
          <div className={styles.rounded}>
            <figure>
              <img src="../../../assets/eua-uk.jpg" alt="" />
              <figcaption>
                <strong>ENGLISH</strong> - Advanced
              </figcaption>
            </figure>
            <figure>
              <img src="../../../assets/pt.jpg" alt="html5 icon" />
              <figcaption>
                <strong>PORTUGUESE</strong> - Native
              </figcaption>
            </figure>
            <figure>
              <img src="../../../assets/germany.jpg" alt="css icon" />
              <figcaption>
                <strong>GERMAN</strong> - Beginner
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className={styles.container_cv}><a className={styles.cv} href="../../../assets/cv-felipe-monteiro-english.pdf" download>Download CV</a></div>
    </motion.div>
  );
};

export default Skills;
