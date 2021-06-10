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
import { PostType } from '../utilities/types'

class Page extends React.Component {
  render() {
    const { path, post, posts, show, nextPost, prevPost } = this.props;
    if ( process.env.NODE_ENV === 'development' ) {
      console.log(post);
    }
    return(
      <ContainerFluid posts={ posts } show={show}>
        <div className={ styles.page } id={'pageTop'}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{ post.title } | { post.subtitle } | ComposersCAPE</title>
            <meta name="author" content={`${post.created_by.firstname} ${post.created_by.lastname}`} />
            <link rel="canonical" href={ `http://composerscape.com${path}` } />
            <meta property="og:title" content={`${ post.title } | ${ post.subtitle } | ComposersCAPE`} />
            <meta property="twitter:title" content={`${ post.title } | ${ post.subtitle } | ComposersCAPE`} />
          </Helmet>
          <div className={ styles.heading }>
            { post.featuredImage ?
              (
                <Image src={ post.featuredImage.formats.large ? post.featuredImage.formats.large.url : post.featuredImage.url }
                       alt={ post.featuredImage.alt }
                       className={styles.featuredImage}
                       fluid />
              ) : null
            }
            <PostPagination nextPost={nextPost} prevPost={prevPost} />
            <h1>
              { post.title } <small>{ post.subtitle }</small>
            </h1>
            <h2 className={styles.date}><span>{post.created_by.firstname} {post.created_by.lastname}</span> { moment(post.created_at).format('MMMM Do, YYYY') }</h2>
          </div>
          <div className={ styles.content }>
            <ReactMarkdown source={ post.content } escapeHtml={false} skipHtml={false} allowDangerousHtml={true} />
          </div>
          {post.spotifyUrl ? (
            <div className={ styles.content }>
              <h3>Listen on Spotify</h3>
              <iframe src={post.spotifyUrl}
                      width="100%"
                      height="232"
                      frameBorder="0"
                      title="Spotify Podcast"
                      allowTransparency="true"
                      allow="encrypted-media"/>
            </div>
          ) : null}
          {post.anchorUrl ? (
            <div className={ styles.content }>
              <h3>Listen on Anchor</h3>
              <iframe src={post.anchorUrl}
                      width="100%"
                      height="180"
                      frameBorder="0"
                      scrolling="no"
                      title="Anchor Podcast"
                      allowTransparency="true"
                      allow="encrypted-media"/>
            </div>
          ) : null}
          {post.appleUrl ? (
            <div className={ styles.content }>
              <h3>Listen on Apple Podcasts</h3>
              <iframe
                src={post.appleUrl}
                height="175px" frameBorder="0"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *;"
                title="Apple Podcast"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  overflow: 'hidden',
                }} />
            </div>
          ) : null}
          {
            post.video && post.video.length > 0 ? (
              <div>
                <div className={ styles.videos }>
                  { post.video.map( ( singleVideo, index ) => (
                    <div key={ index } className={ styles.videoColumn }>
                      {singleVideo.title ? (
                        <h3>{ singleVideo.title }</h3>
                      ): null}
                      {singleVideo.title ? (
                        <h4>{ singleVideo.subtitle }</h4>
                      ): null}
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
  post: PostType.isRequired,
  posts: PropTypes.arrayOf(PostType).isRequired,
}

export default Page;
