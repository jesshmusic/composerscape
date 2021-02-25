import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/cjs/Image';
import moment from 'moment';

import styles from './PostTease.module.scss';
import { PostType } from '../utilities/types';

const PostTeaseSmall = ( { post } ) => (
  <ListGroupItem className={ styles.postTease }>
    <Link to={ `/posts/${ post.id }` } className={ styles.link }>
      { post.featuredImage && post.featuredImage.formats ? (
        <div className={ styles.imageContainer }>
          <Image
            src={ post.featuredImage.formats.small ? post.featuredImage.formats.small.url : post.featuredImage.url }
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

const PostTeaseFeatured = ( { post } ) => (
  <div>
    <Link to={ `/posts/${ post.id }` } className={ styles.link }>
      { post.featuredImage && post.featuredImage.formats ? (
        <div className={ styles.imageContainer }>
          <Image
            src={ post.featuredImage.formats.small ? post.featuredImage.formats.small.url : post.featuredImage.url }
            alt={ post.featuredImage.alt }/>
        </div>
      ) : null }
    </Link>
    <div className={ styles.content }>
      <div className={ styles.overline }>Featured Article</div>
      <Link to={ `/posts/${ post.id }` } className={ styles.link }>
        <h2>{ post.title }</h2>
      </Link>
      <h3>{ post.subtitle }</h3>
      <p>{ post.content }</p>
    </div>
  </div>
)

const PostTease = ( { post, featured } ) => {
  if ( featured ) {
    return <PostTeaseFeatured post={ post }/>;
  }
  return <PostTeaseSmall post={ post }/>;
}

PostTease.propTypes = {
  featured: PropTypes.bool,
  post: PostType
}

export default PostTease;
