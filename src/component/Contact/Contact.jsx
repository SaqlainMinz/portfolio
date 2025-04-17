import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>
                Feel free to reach out!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
                <a href="mailto:officialsaqlainminz98@gmail.com">officialsaqlainminz98@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/saqlain-anish-minz-13362323b/">linkein.com/SaqlainMinz</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="email" />
                <a href="https://github.com/SaqlainMinz">github.com/SaqlainMinz</a>
            </li>
        </ul>


    </footer>
  )
}
