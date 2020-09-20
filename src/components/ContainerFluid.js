import React from "react";
import {Tween} from "react-gsap";
import styles from "./Container.module.scss";

const ContainerFluid = ({ children, posts }) => {
  return (
    <div>
        <div className={styles.containerFluid}>
          <div className={'row'}>
            <Tween from={{ x: '75%', opacity: 0, boxShadow: '0 0 0 rgba(0, 0, 0, 0)'}} duration={2} ease={'power2.inout'}>
              <div className={styles.container}>
                { children }
              </div>
            </Tween>
          </div>
        </div>
    </div>
  );
}

export default ContainerFluid;
