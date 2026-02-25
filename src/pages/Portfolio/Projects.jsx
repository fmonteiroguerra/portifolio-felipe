import React from 'react'
import styles from "./Portfolio.module.css";

const Projects = ({project: {title, image, stackDescription, projectDescription, pageLink, githubLink}}) => {
  return (
    
        
        <div className={styles.portfolio_box}>
                <h1>{title}</h1>
                <img className={styles.port_img} src={image} alt="" />
                <p>
                  <strong>
                    - {stackDescription}
                  </strong>
                </p>
                <p>
                  {projectDescription}
                </p>
                <div className={styles.button_container}>
                  <a href={pageLink} target="_blank">
                    <button className={styles.b_access}> Access Page</button>
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                  >
                    <button className={styles.b_repository}>
                      {" "}
                      &lt; Repository / &gt;{" "}
                    </button>
                  </a>
                </div>
              </div>
    
  )
}

export default Projects