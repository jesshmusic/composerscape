import PropTypes from 'prop-types'


export const PostType = PropTypes.shape({
  anchorUrl: PropTypes.string,
  appleUrl: PropTypes.string,
  content: PropTypes.string,
  created_at: PropTypes.string,
  featuredImage: PropTypes.shape({
    id: PropTypes.number.isRequired,
    formats: PropTypes.shape({
      small: PropTypes.object,
      medium: PropTypes.object,
      large: PropTypes.object,
      thumbnail: PropTypes.object,
    }),
    alt: PropTypes.string,
  }),
  spotifyUrl: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

export const LatestEpisodes = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number.isRequired,
  episodeURL: PropTypes.string,
}));
