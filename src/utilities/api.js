import axios from 'axios'

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://composerscape-api.herokuapp.com';

export const getState = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts?_sort=created_at:desc`);
    const homeResponse = await axios.get(`${API_URL}/composers-cape-home`);
    if ( process.env.NODE_ENV === 'development' ) {
      console.log(homeResponse.data);
    }

    const otherFeaturedPosts = homeResponse.data.otherFeaturedPosts && homeResponse.data.otherFeaturedPosts.length > 1 ? (
      homeResponse.data.otherFeaturedPosts.slice(0, 2)
    ) : homeResponse.data.otherFeaturedPosts;

    return {
      latestEpisodes: homeResponse.data.latestEpisodes,
      featuredArticle: homeResponse.data.featuredArticle,
      homeSubtitle: homeResponse.data.subtitle,
      otherFeaturedPosts,
      posts: response.data,
      loading: false,
    };
  } catch(error) {
    return {
      error,
      loading: false,
    };
  }
}
