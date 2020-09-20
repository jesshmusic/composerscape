import React from "react";
import {Tween} from "react-gsap";
import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return (
    <div>
      <Tween from={{ x: '-500', opacity: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)'}} duration={2} ease={'power2.out'}>
        <div className={styles.container}>
          { children }
        </div>
      </Tween>
    </div>
  );
}

export default Container;
