import PropTypes from "prop-types";
import VideoPlayerStyle from "./VideoPlayerStyle";

const VideoPlayer = ({ videoFile, autoPlay, videoLoop }) => (
  <VideoPlayerStyle>
    <video autoPlay={autoPlay} muted loop={videoLoop}>
      <source src={videoFile} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  </VideoPlayerStyle>
);

VideoPlayer.propTypes = {
  videoFile: PropTypes.string,
  autoPlay: PropTypes.bool,
  videoLoop: PropTypes.bool,
};

export default VideoPlayer;
