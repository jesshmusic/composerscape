import axios from 'axios'

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://composerscape-api.herokuapp.com';

export const getState = async () => {
  try {
    const homeResponse = await axios.get( `${ API_URL }/api/composers-cape-home?[populate]=*` );
    const response = await axios.get( `${ API_URL }/api/posts?sort=id:desc&[populate]=*` );

    const allPosts = response.data.data.map( rawPost => {
      let parsedPost = {
        id: rawPost.id,
        ...rawPost.attributes
      }
      if ( rawPost.attributes.featuredImage && rawPost.attributes.featuredImage.data ) {
        console.log( rawPost.attributes.featuredImage );
        parsedPost.featuredImage = {
          id: rawPost.attributes.featuredImage.data.id,
          ...rawPost.attributes.featuredImage.data.attributes,
        }
      } else {
        parsedPost.featuredImage = {
          id: 0,
          formats: {},
          url: 'https://composerscape.s3.us-east-2.amazonaws.com/ComposersCAPELogo.jpg'
        };
      }
      return parsedPost;
    } );

    return {
      latestEpisodes: homeResponse.data.data.attributes.latestEpisodes,
      featuredArticle: allPosts[0],
      homeSubtitle: homeResponse.data.data.attributes.subtitle,
      otherFeaturedPosts: allPosts.slice( 1, 4 ),
      posts: allPosts,
      loading: false,
    };
  } catch ( error ) {
    return {
      error,
      loading: false,
    };
  }
}
