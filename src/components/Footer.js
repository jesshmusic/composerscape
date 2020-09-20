import styles from "../styles/components/Footer.module.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h4>Jess Hendricks <small>Composer of music for film, games, and media</small></h4>
            <address>
              Easthampton, MA, USA<br/>
              <a href={'//existentialmusic.com'} target='_blank' rel='noopener noreferrer'>ExistentialMusic.com</a><br/>
              <a href={'tel:(413) 367-6215'}>(413) 367-6215</a>
            </address>
          </div>
          <div className={styles.col}>

          </div>
        </div>
      </div>
      <div className={styles.copyrightBar}>
        &copy; {new Date().getFullYear()} Existential Music. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
