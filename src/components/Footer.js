import styles from "./Footer.module.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h4>Composers<span>CAPE</span> <small>YouTube channel for music, movie, and other discussion and opinion</small></h4>
            <div className="g-ytsubscribe"
                 data-channelid="UCHx8Wioh6Cz8X-WwOuXFspQ"
                 data-layout="full"
                 data-theme="dark"
                 data-count="hidden"/>
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
