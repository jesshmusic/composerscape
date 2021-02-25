import PropTypes from 'prop-types'


export const PostType = {
  anchorUrl: PropTypes.string,
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
}
