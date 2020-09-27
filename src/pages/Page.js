import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";
import ContainerFluid from "../components/ContainerFluid";
import Image from "react-bootstrap/Image";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Page extends React.Component {
  render() {
    const { path, post, posts, show, nextPost, prevPost } = this.props;
    return(
      <ContainerFluid posts={ posts } show={show}>
        <div className={ styles.page } id={'pageTop'}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{ post.title } | { post.subtitle } | ComposersCAPE</title>
            <link rel="canonical" href={ `http://composerscape.com${path}` } />
            <meta property="og:title" content={`${ post.title } | ${ post.subtitle } | ComposersCAPE`} />
            <meta property="twitter:title" content={`${ post.title } | ${ post.subtitle } | ComposersCAPE`} />
          </Helmet>
          <div className={ styles.heading }>
            { post.featuredImage ?
              (
                <Image src={ post.featuredImage.formats.large.url }
                       alt={ post.featuredImage.alt }
                       className={styles.featuredImage}
                       fluid />
              ) : null
            }
            <PostPagination nextPost={nextPost} prevPost={prevPost} />
            <h1>
              { post.title } <small>{ post.subtitle }</small>
            </h1>
            <h2 className={styles.date}>{ moment(post.created_at).format('MMMM Do, YYYY') }</h2>
          </div>
          <div className={ styles.content }>
            <ReactMarkdown source={ post.content } />
          </div>
          {
            post.video && post.video.length > 0 ? (
              <div>
                <div className={ styles.videos }>
                  { post.video.map( ( singleVideo, index ) => (
                    <div key={ index } className={ styles.videoColumn }>
                      <h3>{ singleVideo.title }</h3>
                      <h4>{ singleVideo.subtitle }</h4>
                      <VideoPlayer videoSourceURL={ singleVideo.videoSourceURL }/>
                    </div>
                  ) ) }
                </div>
              </div>
            ) : null
          }
          <PostPagination nextPost={nextPost} prevPost={prevPost} />
        </div>
      </ContainerFluid>
    )
      ;
  }
}

const PostPagination = ({nextPost, prevPost}) =>
  <div className={styles.pagination}>
    <div className={styles.previous}>
      {prevPost ? (
        <Link to={`/posts/${prevPost.id}`}>
          <i className="fas fa-hand-point-left text-secondary"/> Previous Post
        </Link>
      ) : null}
    </div>
    <div className={styles.home}>
      <Link to={`/`}>
        Home <i className="fas fa-hand-point-up text-secondary"/>
      </Link>
    </div>
    <div className={styles.next}>
      {nextPost ? (
        <Link to={`/posts/${nextPost.id}`}>
          Next Post <i className="fas fa-hand-point-right text-secondary"/>
        </Link>
      ) : null}
    </div>
  </div>;


Page.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Page;
