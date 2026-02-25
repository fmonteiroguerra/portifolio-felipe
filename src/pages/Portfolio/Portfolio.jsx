import React, { useState } from "react";
import styles from "./Portfolio.module.css";

import { motion } from "framer-motion";
import Projects from "./Projects";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      title: "Movies World",
      image: "./preview.png",
      stackDescription:
        "React, Javascript, RESTful Api (TMDB API), Vite, Tailwind CSS, Material UI (Modal), react-use (useDebounce)",
      projectDescription:
        "Web application for searching and discovering movies using The Movie Database (TMDB) API. Allows searching for movies by name, viewing the most popular ones, and consulting details of each movie in an interactive modal.",
      pageLink: "https://movie-app-58qu.onrender.com/",
      githubLink: "https://github.com/fmonteiroguerra/movie-app",
    },
    {
      title: "TechCollab",
      image: "./blog.jpg",
      stackDescription:
        "React (including React Hooks, Customized Hooks, React-Router-Dom and Context API), Javascript, CSS, HTML, Backend created with Firebase",
      projectDescription:
        "A Blog where everyone can collab. Create easily your User to try it (no need to confirm email), begin to create posts and manage them on your Dashboard (edit, delete).",
      pageLink: "https://techcollab.onrender.com/",
      githubLink: "https://github.com/fmonteiroguerra/tech-collab-community",
    },
    {
      title: "Secret Word (game)",
      image: "./secret2.jpg",
      stackDescription: "React, Javascript, CSS, HTML",
      projectDescription:
        "A fun and challenging game that draws words for you to guess. You have a limited number of chances, the wrong guessings will be displayed and you earn cumulative points when you guess right.",
      pageLink: "https://secretwordreact.onrender.com",
      githubLink: "https://github.com/fmonteiroguerra/secretword",
    },
    {
      title: "Portfolio WebSite",
      image: "./portfolio.jpg",
      stackDescription:
        "React (including React Hooks, Customized Hooks, Reat-Router-Dom), Javascript, CSS, HTML, Framer Motion",
      projectDescription:
        "A responsive and animated WebSite made as Single Page Aplication focused to share a bit of my frontend experience.",
      pageLink: "https://felipemonteiro.onrender.com/",
      githubLink: "https://github.com/fmonteiroguerra/portifolio-felipe",
    },
    {
      title: "Astronomy Photo of The Day (Consuming Nasa's API)",
      image: "./angular-nasa.jpg",
      stackDescription: "Angular, TypeScript, Bootstrap, CSS, HTML",
      projectDescription:
        "Consumes 2 Nasa Api's (Apod & NeoWs). Each date chosen will bring the photo and information posted that date by NASA and the number of asteroids found near earth.",
      pageLink: "https://angular-nasa-api.onrender.com/",
      githubLink: "https://github.com/fmonteiroguerra/Angular-Nasa-API",
    },
    {
      title: "Car Stand Records (JavaScript CRUD)",
      image: "./crudjs.jpg",
      stackDescription: "Javascript, Bootstrap 5, CSS, HTML",
      projectDescription: "Search, Add, Delete and Edit Car records",
      pageLink: "https://durative-yolks.000webhostapp.com/#",
      githubLink: "https://github.com/fmonteiroguerra/js-crud",
    },

    {
      title: "Porto Inside (Static Website)",
      image: "./porto-inside.jpg",
      stackDescription: "HTML, CSS, Bootstrap",
      projectDescription: "Discover more about the wonderful city of Porto.",
      pageLink: "https://chorographic-coil.000webhostapp.com/index.html",
      githubLink: "https://github.com/fmonteiroguerra/WebSite-Porto-Inside",
    },
  ]);

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      {projects.map((project) => (
        <Projects key={project.title} project={project} />
      ))}
    </motion.div>
  );
};

export default Portfolio;
