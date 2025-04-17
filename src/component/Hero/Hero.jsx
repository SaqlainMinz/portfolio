import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saqlain</h1>
        <p className={styles.descriptopn}>
          I am a developer who wants to use his experience to the benefit of
          others.
        </p>
        <a href="mailto:officialsaqlainminz98@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image"  className={styles.heroImg}/>;
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
      
    </section>
  );
}

export default Hero;
