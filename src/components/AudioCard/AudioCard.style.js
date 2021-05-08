import styled from "styled-components";

const AudioCardStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  min-height: 700px;
  max-width: 550px;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 28px 28px rgba(0, 0, 0, 0.2);
  margin: auto;
  color: white;
  position: relative;

  svg {
    fill: white;
  }

  .track-info {
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export { AudioCardStyle };
