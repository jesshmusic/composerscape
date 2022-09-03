import axios from 'axios'

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://composerscape-api.herokuapp.com';

export const getState = async () => {
  try {
    const homeResponse = await axios.get(`${API_URL}/api/composers-cape-home?[populate]=*`);
    const response = await axios.get(`${API_URL}/api/posts?sort=id:desc&[populate]=*`);
    if ( process.env.NODE_ENV === 'development' ) {
      console.log(homeResponse.data.data);
      console.log(response.data.data);
    }
    const allPosts = response.data.data.map(rawPost => {
      let parsedPost = {
        id: rawPost.id,
        ...rawPost.attributes
      }
      if (rawPost.featuredImage) {
        parsedPost.featuredImage = {
          id: rawPost.featuredImage.id,
          ...rawPost.featuredImage,
        }
      } else {
        parsedPost.featuredImage = {
          formats: {},
          url: ''
        };
      }
      return parsedPost;
    });

    return {
      latestEpisodes: homeResponse.data.data.attributes.latestEpisodes,
      featuredArticle: allPosts[0],
      homeSubtitle: homeResponse.data.data.attributes.subtitle,
      otherFeaturedPosts: allPosts.slice(1, 4),
      posts: allPosts,
      loading: false,
    };
  } catch(error) {
    return {
      error,
      loading: false,
    };
  }
}
