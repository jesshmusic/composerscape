import React from "react";
import { Transition } from "react-transition-group";
import gsap from 'gsap';
import styles from "./Container.module.scss";
import Footer from "./Footer";

const startState = { autoAlpha: 0 };

const ContainerFluid = ({ children, show }) => {
  const nodeRef = React.createRef();
  return (
    <Transition unmountOnExit
                in={ show }
                timeout={ 1000 }
                onEnter={ node => gsap.set( node, startState ) }
                addEndListener={ ( node, done ) => {
                  gsap.to( node, {
                    autoAlpha: show ? 1 : 0,
                    onComplete: done,
                    duration: 1
                  });}} >
      <div className={ styles.containerFluid } ref={ nodeRef }>
        <div className={ styles.container }>
          { children }
        </div>
        <Footer />
      </div>
    </Transition>
  );
};

export default ContainerFluid;
