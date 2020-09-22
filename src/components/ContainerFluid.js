import React from "react";
import { Transition } from "react-transition-group";
import gsap from 'gsap';
import styles from "./Container.module.scss";

const startState = { autoAlpha: 0, y: -50 };

const ContainerFluid = ({ children, show }) => {
  const nodeRef = React.createRef();
  return (
    <Transition unmountOnExit
                in={ show }
                timeout={ 1000 }
                onEnter={ node => gsap.set( node, startState ) }
                addEndListener={ ( node, done ) => {
                  gsap.to( node, 1, {
                    autoAlpha: show ? 1 : 0,
                    y: show ? 0 : 250,
                    onComplete: done
                  });}} >
      <div className={ styles.containerFluid } ref={ nodeRef }>
        <div className={ 'row' }>
          <div className={ styles.container }>
            { children }
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ContainerFluid;
