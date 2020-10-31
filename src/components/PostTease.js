import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/cjs/Image";
import moment from "moment";

import styles from './PostTease.module.scss';

const PostTease = ({post}) => (
  <ListGroupItem className={styles.postTease}>
    <Link to={`/posts/${post.id}`} className={styles.link}>
      <div className={styles.imageContainer}>
        <Image src={ post.featuredImage.formats.small ? post.featuredImage.formats.small.url : post.featuredImage.url }
               alt={ post.featuredImage.alt } />
      </div>
      <div className={styles.content}>
        <div className={styles.overline}>
          { moment(post.created_at).format('MMMM Do, YYYY') }
        </div>
        <h2>{post.title}</h2>
        <h3>{post.subtitle}</h3>
      </div>
    </Link>
  </ListGroupItem>
);

export default PostTease;
