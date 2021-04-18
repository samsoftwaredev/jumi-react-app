import PropTypes from "prop-types";
import styled from "styled-components";

const Video = styled.div`
  video {
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;

const VideoBackground = ({ videoFile, autoPlay, videoLoop }) => {
  return (
    <Video>
      <video autoPlay={autoPlay} muted loop={videoLoop}>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </Video>
  );
};

VideoBackground.propTypes = {
  videoFile: PropTypes.string,
  autoPlay: PropTypes.bool,
  videoLoop: PropTypes.bool,
};

export default VideoBackground;
