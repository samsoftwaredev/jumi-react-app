import styled from "styled-components";

const AudioCardStyle = styled.div`
  .audio-player {
    max-width: 350px;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
    margin: auto;
    color: var(--white);
  }

  .artwork {
    border-radius: 120px;
    display: block;
    margin: auto;
    height: 200px;
    width: 200px;
  }

  .track-info {
    text-align: center;
    z-index: 1;
    position: relative;
  }

  .title {
    font-weight: 700;
    margin-bottom: 4px;
  }

  .artist {
    font-weight: 300;
    margin-top: 0;
  }
`;

export { AudioCardStyle };
