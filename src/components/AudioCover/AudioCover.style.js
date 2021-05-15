import styled from "styled-components";

const AudioCoverStyle = styled.div`
  margin-bottom: 50px;
  max-width: 100%;
  .artwork {
    border-radius: 120px;
    display: block;
    margin: auto;
    max-height: 200px;
    max-width: 300px;
  }

  .title {
    font-weight: 700;
    margin-bottom: 4px;
  }

  .description {
    text-align: left;
    font-weight: 300;
    margin-top: 0;
  }

  .height-sm {
    padding: 10px 0;
    max-height: 120px;
    box-shadow: inset 0px -7px 10px -11px #000000;
  }
`;

export { AudioCoverStyle };
