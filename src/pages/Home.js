import ContainerFluid from '../components/ContainerFluid';
import PostTease from '../components/PostTease';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import styles from './Home.module.scss';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'react-bootstrap'
import VideoPlayer from '../components/VideoPlayer'
import PropTypes from 'prop-types'
import { LatestEpisodes, PostType } from '../utilities/types'

const HomePage = ( { posts, latestEpisodes, featuredArticle, otherFeaturedPosts, homeSubtitle } ) => {
  console.log( posts );
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Home | ComposersCAPE</title>
        <link rel="canonical" href={ `http://composerscape.com/` }/>
        <meta property="og:title" content={ `Home | ComposersCAPE` }/>
        <meta property="twitter:title" content={ `Home | ComposersCAPE` }/>
      </Helmet>
      <ContainerFluid show={ true }>
        <Row>
          <Col xs={ 12 } className={ styles.subtitleBanner }>
            <h2>{ homeSubtitle }</h2>
          </Col>
          <Col className={ styles.features }>
            { featuredArticle && featuredArticle !== {} ? (
              <PostTease post={ featuredArticle } featured={ true }/>
            ) : null }
            { otherFeaturedPosts && otherFeaturedPosts.length > 0 ? (
              otherFeaturedPosts.map( nextFeature => (
                  <PostTease post={ nextFeature } subFeatured={ true } key={ nextFeature.id }/>
                )
              )
            ) : null }
          </Col>
        </Row>
        <Row>
          <Col xs={ 12 } className={ styles.subtitleBanner }>
            <h2>Podcasts <small>Where to Listen</small></h2>
          </Col>
        </Row>
        <Row className={ styles.podcasts }>
          <Col xs={ 12 } lg={ 6 } xl={ 4 }>
            <h3>iTunes</h3>
            <iframe
              src="https://embed.podcasts.apple.com/us/podcast/composerscape/id1555183291?itsct=podcast_box_player&amp;itscg=30200&amp;theme=auto"
              title="iTunes Podcast Player"
              className={ styles.podcastApple }/>
          </Col>
          <Col xs={ 12 } lg={ 6 } xl={ 4 }>
            <h3>TuneIn</h3>
            <iframe src="https://tunein.com/embed/player/p1416793/"
                    className={ styles.podcastIframe }
                    scrolling="no"
                    title="TuneIn Podcast Player"
                    frameBorder="no"/>
          </Col>
          <Col xs={ 12 } lg={ 6 } xl={ 4 }>
            <h3>Spotify</h3>
            <iframe src="https://open.spotify.com/embed-podcast/show/3y9vLGBd0B03KIsXlhE6nP"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allowTransparency="true"
                    title="Spotify Podcast Player"
                    allow="encrypted-media"/>
          </Col>
        </Row>
        <Row>
          <Col md={ 8 } className={ styles.latestPosts }>
            <h3 className={ styles.sectionHeading }>Latest</h3>
            <ListGroup variant={ 'flush' } className={ styles.home }>
              { posts.map( post =>
                <PostTease post={ post } key={ post.id }/>
              ) }
            </ListGroup>
          </Col>
          { latestEpisodes && latestEpisodes.length > 0 ? (
            <Col md={ 4 } className={ styles.latestEpisodes }>
              <h3 className={ styles.sectionHeading }>Recent Episodes</h3>
              { latestEpisodes.map( ( singleVideo, index ) => (
                <VideoPlayer
                  videoSourceURL={ singleVideo.episodeURL }
                  height="100px"
                  key={ index }/>
              ) ) }
            </Col>
          ) : null }
        </Row>
      </ContainerFluid>
    </div>
  );
}

HomePage.propTypes = {
  posts: PropTypes.arrayOf( PostType ).isRequired,
  featuredArticle: PostType,
  latestEpisodes: LatestEpisodes,
  otherFeaturedPosts: PropTypes.arrayOf( PostType ),
  show: PropTypes.bool,
  homeSubtitle: PropTypes.string.isRequired,
}

export default HomePage;
