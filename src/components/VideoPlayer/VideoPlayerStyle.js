import styled from "styled-components";

const VideoPlayerStyle = styled.div`
  video {
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
`;

export default VideoPlayerStyle;
