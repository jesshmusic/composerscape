import ContainerFluid from "../components/ContainerFluid";
import PostTease from "../components/PostTease";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import styles from './Home.module.scss';

const HomePage = ({posts}) => (
  <ContainerFluid>
    <ListGroup variant={'flush'} className={styles.home}>
      {posts.map(post =>
        <PostTease post={post} key={post.id}  />
      )}
    </ListGroup>
  </ContainerFluid>
);

export default HomePage;
