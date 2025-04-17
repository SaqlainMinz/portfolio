import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container}><h2 className={styles.title} id='about'>About</h2>
    <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")} alt="sitting wit the laptop" className={styles.aboutImg} />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}> <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
        <div className={styles.aboutItemText}>
            <h3>Frontend developer</h3>
            <p>
                I am a frontend developer with experience in building responsive and optimal site.
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}> <img src={getImageUrl("about/serverIcon.png")} alt="server" />
        <div className={styles.aboutItemText}>
            <h3>Backend developer</h3>
            <p>
                I have experience developing fast and optimised backend system and APIs.
            </p>
        </div>
        </li>
    </ul>
    </div>
    </section>
  )
}
