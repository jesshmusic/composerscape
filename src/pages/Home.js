import ContainerFluid from "../components/ContainerFluid";
import PostTease from "../components/PostTease";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import styles from './Home.module.scss';
import { Helmet } from "react-helmet";

const HomePage = ({posts, show}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | ComposersCAPE</title>
        <link rel="canonical" href={ `http://composerscape.com/` } />
        <meta name="og:title" content={`Home | ComposersCAPE`} />
        <meta name="twitter:title" content={`Home | ComposersCAPE`} />
      </Helmet>
      <ContainerFluid show={ show }>
        <ListGroup variant={ 'flush' } className={ styles.home }>
          { posts.map( post =>
            <PostTease post={ post } key={ post.id }/>
          ) }
        </ListGroup>
      </ContainerFluid>
    </div>
  );
}

export default HomePage;
