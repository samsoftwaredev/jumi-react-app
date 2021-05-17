import styled from "styled-components";

const AudioControlsStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .btn-clear {
    margin: 0 10px;
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

  @media (max-width: 496px) {
    justify-content: center;

    .btn-clear {
      width: calc(100% * (1 / 3) - 10px - 1px);
      margin: 5px 0;
    }

    #next-track {
      order: 3;
    }

    #previous-track {
      order: 1;
    }

    #pause-track {
      order: 2;
    }

    #play-track {
      order: 2;
    }

    #mute-track {
      order: 5;
    }

    #unmute-track {
      order: 5;
    }

    #rosary-settings {
      order: 4;
    }
  }
`;

export default AudioControlsStyle;
