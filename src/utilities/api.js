import axios from 'axios'

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://composerscape-api.herokuapp.com';

export const getState = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts?_sort=published_at:desc`);
    const homeResponse = await axios.get(`${API_URL}/composers-cape-home`);
    if ( process.env.NODE_ENV === 'development' ) {
      console.log(homeResponse.data);
      console.log(response.data);
    }
    const latestPosts = response.data.slice(0, 4);

    return {
      latestEpisodes: homeResponse.data.latestEpisodes,
      featuredArticle: latestPosts[0],
      homeSubtitle: homeResponse.data.subtitle,
      otherFeaturedPosts: latestPosts.slice(1, 4),
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
