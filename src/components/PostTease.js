import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/cjs/Image';
import moment from 'moment';

import styles from './PostTease.module.scss';
import { PostType } from '../utilities/types';

const PostTeaseSmall = ( { post, feaaturedImageURL } ) => (
  <ListGroupItem className={ styles.postTease }>
    <Link to={ `/posts/${ post.id }` } className={ styles.link }>
      { post.featuredImage && post.featuredImage.formats ? (
        <div className={ styles.imageContainer }>
          <Image
            src={ feaaturedImageURL }
            alt={ post.featuredImage.alt }/>
        </div>
      ) : null }
      <div className={ styles.content }>
        <div className={ styles.overline }>
          { moment( post.created_at ).format( 'MMMM Do, YYYY' ) }
        </div>
        <h2>{ post.title }</h2>
        <h3>{ post.subtitle }</h3>
      </div>
    </Link>
  </ListGroupItem>
);

const PostTeaseFeaturedLarge = ( { post, feaaturedImageURL } ) => (
  <div className={`${styles.featuredPost} ${styles.large}`} style={{backgroundImage: `url("${feaaturedImageURL}")`}}>
    <div className={ styles.content }>
      <div className={ styles.overline }>Featured Article</div>
      <Link to={ `/posts/${ post.id }` } className={ styles.link }>
        { post.title }
      </Link>
      <p>{ post.excerpt ? post.excerpt : post.content }</p>
    </div>
  </div>
)

const PostTeaseFeaturedSmall = ( { post, feaaturedImageURL } ) => (
  <div className={`${styles.featuredPost} ${styles.small}`} style={{backgroundImage: `url("${feaaturedImageURL}")`}}>
    <div className={ styles.content }>
      <Link to={ `/posts/${ post.id }` } className={ styles.link }>
        { post.title }
      </Link>
      <h3>{ post.subtitle }</h3>
    </div>
  </div>
)

const PostTease = ( { post, featured, subFeatured } ) => {
  const featuredImageURLSmall = post.featuredImage.formats.small ? post.featuredImage.formats.small.url : post.featuredImage.url
  const featuredImageURLLarge = post.featuredImage.formats.large ? post.featuredImage.formats.large.url : post.featuredImage.url
  if ( featured ) {
    return <PostTeaseFeaturedLarge post={ post } feaaturedImageURL={featuredImageURLLarge}/>;
  } else if (subFeatured) {
    return <PostTeaseFeaturedSmall post={ post } feaaturedImageURL={featuredImageURLSmall}/>;
  }
  return <PostTeaseSmall post={ post } feaaturedImageURL={featuredImageURLSmall}/>;
}

PostTease.propTypes = {
  featured: PropTypes.bool,
  post: PostType,
  subFeatured: PropTypes.bool,
}

export default PostTease;
