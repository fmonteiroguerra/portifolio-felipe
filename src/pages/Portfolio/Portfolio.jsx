import React from "react";
import styles from "./Portfolio.module.css";
import secret from "../../assets/secret2.jpg";
import crudjs from "../../assets/crudjs.jpg";
import angular_nasa from "../../assets/angular-nasa.jpg";
import porto_inside from "../../assets/porto-inside.jpg";
import blog from "../../assets/blog.jpg";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >

<div className={styles.portfolio_box}>
        <h1>TechCollab</h1>
        <img className={styles.port_img} src={blog} alt="" />
        <p>
          <strong>[React (including React Hooks, Customized Hooks, Reat-Router-Dom and Context API), Javascript, CSS, HTML, Backend created with Firebase]</strong>
        </p>
        <p>
        A Blog where everyone can collab. <br /> Create easily your User to try it (no need to confirm email), begin to create posts and manage them on your Dashboard (edit, delete).
        </p>
        <div className={styles.button_container}>
          <a href="https://techcollab.onrender.com/" target="_blank">
            <button className={styles.b_access}> Access Page</button>
          </a>
          <a
            href="https://github.com/fmonteiroguerra/tech-collab-community"
            target="_blank"
          >
            <button className={styles.b_repository}>
              {" "}
              &lt; Repository / &gt;{" "}
            </button>
          </a>
        </div>
      </div>


      <div className={styles.portfolio_box}>
        <h1>Secret Word (game)</h1>
        <img className={styles.port_img} src={secret} alt="" />
        <p>
          <strong>[React, Javascript, CSS, HTML]</strong>
        </p>
        <p>
          A fun and challenging game where you have to discover the secret word.
        </p>
        <div className={styles.button_container}>
          <a href="https://react-game-secretword.onrender.com/" target="_blank">
            <button className={styles.b_access}> Access Page</button>
          </a>
          <a
            href="https://github.com/fmonteiroguerra/REACT-Game-SecretWord"
            target="_blank"
          >
            <button className={styles.b_repository}>
              {" "}
              &lt; Repository / &gt;{" "}
            </button>
          </a>
        </div>
      </div>

      <div className={styles.portfolio_box}>
        <h1>Car Stand Records (JavaScript CRUD)</h1>
        <img className={styles.port_img} src={crudjs} alt="" />
        <p>
          <strong>[Javascript, Bootstrap 5, CSS, HTML]</strong>
        </p>
        <p>Search, Add, Delete and Edit Car records </p>
        <div className={styles.button_container}>
          <a href="https://durative-yolks.000webhostapp.com/#" target="_blank">
            <button className={styles.b_access}> Access Page</button>
          </a>
          <a href="https://github.com/fmonteiroguerra/js-crud" target="_blank">
            <button className={styles.b_repository}>
              {" "}
              &lt; Repository / &gt;{" "}
            </button>
          </a>
        </div>
      </div>

      <div className={styles.portfolio_box}>
        <h1>Astronomy Photo of The Day (Consuming Nasa API's)</h1>
        <img className={styles.port_img} src={angular_nasa} alt="" />
        <p>
          <strong>[Angular, TypeScript, Bootstrap, CSS, HTML]</strong>
        </p>
        <p>
          Consumes 2 Nasa Api's (Apod & NeoWs). Each date chosen will bring the
          photo and information posted that date by NASA and the number of
          asteroids.{" "}
        </p>
        <div className={styles.button_container}>
          <a href="https://angular-nasa-api.onrender.com/" target="_blank">
            <button className={styles.b_access}> Access Page</button>
          </a>
          <a
            href="https://github.com/fmonteiroguerra/Angular-Nasa-API"
            target="_blank"
          >
            <button className={styles.b_repository}>
              {" "}
              &lt; Repository / &gt;{" "}
            </button>
          </a>
        </div>
      </div>
      <div className={styles.portfolio_box}>
        <h1>Porto Inside (Static Website)</h1>
        <img className={styles.port_img} src={porto_inside} alt="" />
        <p>
          <strong>[HTML, CSS, Bootstrap]</strong>
        </p>
        <p>Discover more about the wonderful city of Porto.</p>
        <div className={styles.button_container}>
          <a
            href="https://chorographic-coil.000webhostapp.com/index.html"
            target="_blank"
          >
            <button className={styles.b_access}> Access Page</button>
          </a>
          <a
            href="https://github.com/fmonteiroguerra/WebSite-Porto-Inside"
            target="_blank"
          >
            <button className={styles.b_repository}>
              {" "}
              &lt; Repository / &gt;{" "}
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
