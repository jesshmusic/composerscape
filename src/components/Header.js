import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import SiteBanner from "../assets/images/SiteBanner.jpg";
import React from "react";
import { Nav } from "react-bootstrap";

const Header = () => (
  <div className={styles.header}>
    <Link className={styles.banner} to={'/'} style={{backgroundImage: `url('${SiteBanner}')`}}>
      <span className={styles.hidden}>Jess Hendricks ComposersCAPE</span>
    </Link>
    <Nav className="justify-content-center">
      <Nav.Item as="li">
        <Nav.Link href={'https://www.youtube.com/channel/UCHx8Wioh6Cz8X-WwOuXFspQ'} target={'_blank'}>
          <i className="fab fa-youtube"/> YouTube
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href={'https://twitter.com/CapeComposers'} target={'_blank'}>
          <i className="fab fa-twitter"/> Twitter
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default Header;
