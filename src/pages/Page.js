import React from 'react';
import PropTypes from 'prop-types';
import styles from './Page.module.scss';
import VideoPlayer from "../components/VideoPlayer";
import ContainerFluid from "../components/ContainerFluid";
import Image from "react-bootstrap/Image";
import ReactMarkdown from "react-markdown";
import moment from "moment";

class Page extends React.Component {
  render() {
    const { post, posts, show } = this.props;
    return(
      <ContainerFluid posts={ posts } show={show}>
        <div className={ styles.page } id={'pageTop'}>
          <div className={ styles.heading }>
            { post.featuredImage ?
              (
                <Image src={ post.featuredImage.formats.large.url }
                       alt={ post.featuredImage.alt }
                       className={styles.featuredImage}
                       fluid />
              ) : null
            }
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
        </div>
      </ContainerFluid>
    )
      ;
  }
}

Page.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Page;
