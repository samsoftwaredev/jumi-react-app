import { Card } from "reactstrap";
import styled from "styled-components";

const GroupCardStyle = styled(Card)`
  height: 480px;
  img {
    margin: auto;
    width: 100%;
    max-height: 200px;
    max-width: 200px;
  }
  @media (max-width: 768px) {
    height: 430px;
    img {
      margin: auto;
      width: 100%;
      max-height: 100px;
      max-width: 100px;
    }
  }
`;

export { GroupCardStyle };
