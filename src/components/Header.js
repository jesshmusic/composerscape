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
          <i className="fab fa-youtube"/>&nbsp;<span className="d-none d-md-inline">YouTube</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href={'https://podcasts.apple.com/us/podcast/composerscape/id1555183291'} target={'_blank'}>
          <i className="fab fa-apple"/>&nbsp;<span className="d-none d-md-inline">Apple Podcasts</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href={'https://open.spotify.com/show/3y9vLGBd0B03KIsXlhE6nP'} target={'_blank'}>
          <i className="fab fa-spotify"/>&nbsp;<span className="d-none d-md-inline">Spotify</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href={'https://tunein.com/podcasts/Media--Entertainment-Podcasts/ComposersCAPE-p1416793/'} target={'_blank'}>
          <i className="fas fa-podcast"/>&nbsp;<span className="d-none d-md-inline">TuneIn</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href={'https://twitter.com/CapeComposers'} target={'_blank'}>
          <i className="fab fa-twitter"/>&nbsp;<span className="d-none d-md-inline">Twitter</span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default Header;
