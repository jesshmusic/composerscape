import ContainerFluid from "../components/ContainerFluid";
import PostTease from "../components/PostTease";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

import styles from './Home.module.scss';
import { Helmet } from "react-helmet";
import { Col, Row } from 'react-bootstrap'
import VideoPlayer from '../components/VideoPlayer'
import PropTypes from 'prop-types'
import { PostType } from '../utilities/types'

const HomePage = ({posts, show, latestEpisodes, featuredArticle}) => {


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | ComposersCAPE</title>
        <link rel="canonical" href={ `http://composerscape.com/` } />
        <meta property="og:title" content={`Home | ComposersCAPE`} />
        <meta property="twitter:title" content={`Home | ComposersCAPE`} />
      </Helmet>
      <ContainerFluid show={ show }>
        <Row>
          {featuredArticle && featuredArticle !== {} ? (
            <Col md={8}>
              <PostTease post={ featuredArticle } featured={ true }/>
            </Col>
          ) : null}
          {latestEpisodes && latestEpisodes.length > 0 ? (
            <Col md={4}>
              { latestEpisodes.map( ( singleVideo, index ) => (
                <VideoPlayer
                  videoSourceURL={ singleVideo.episodeURL }
                  height="100px"
                  key={ index }/>
              ) ) }
            </Col>
          ) : null}
        </Row>
        <ListGroup variant={ 'flush' } className={ styles.home }>
          { posts.map( post =>
            <PostTease post={ post } key={ post.id }/>
          ) }
        </ListGroup>
      </ContainerFluid>
    </div>
  );
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(PostType)).isRequired,
  featuredArticle: PropTypes.shape(PostType),
  latestEpisodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    episodeURL: PropTypes.string,
  })),
  show: PropTypes.bool,
}

export default HomePage;
