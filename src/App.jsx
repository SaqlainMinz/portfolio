import styles from "./App.module.css";
import { About } from "./component/About/About";
import { Contact } from "./component/Contact/Contact";
import { Experience } from "./component/Experience/Experience";
import Hero from "./component/hero/hero";

import { Navbar } from "./component/Navbar/navbar";
import { Project } from "./component/Projects/Project";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
