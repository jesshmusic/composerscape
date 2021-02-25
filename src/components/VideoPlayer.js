import React from "react";
import styles from "./VideoPlayer.module.scss";
import '../styles/components/react-video-player.scss';
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {videoSourceURL} = props;
  return (
    <div className={styles.videoPlayerWrapper}>
      <ReactPlayer
        className={styles.videoPlayer}
        controls={true}
        pip={false}
        playsInline
        url={videoSourceURL}
        width="100%"
        height="100%"
      />
    </div>
  );
}

VideoPlayer.propTypes = {
  videoSourceURL: PropTypes.string.isRequired,
}

export default VideoPlayer;
