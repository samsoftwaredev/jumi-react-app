import styled from "styled-components";

const AudioControlsStyle = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;

  .btn {
    margin: 0 20px;
  }

  .prev svg,
  .next svg {
    min-width: 35px;
    min-height: 35px;
  }

  .play svg,
  .pause svg {
    min-height: 40px;
    min-width: 40px;
  }

  path {
    fill: white;
  }
`;

export default AudioControlsStyle;
