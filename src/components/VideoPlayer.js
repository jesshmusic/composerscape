import React, { Component } from "react";
import styles from "./VideoPlayer.module.scss";
import '../styles/components/react-video-player.scss';
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

export default class VideoPlayer extends Component {
  render() {
    return (
      <ReactPlayer
        className={styles.videoPlayer}
        controls={true}
        pip={false}
        playsInline
        url={this.props.videoSourceURL}
        width={'100%'}
        height={'auto'}
      />
    )
  }
}

VideoPlayer.propTypes = {
  videoSourceURL: PropTypes.string.isRequired
}
