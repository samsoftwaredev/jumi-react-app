import { Card } from "reactstrap";
import styled from "styled-components";

const GroupCardStyle = styled(Card)`
  height: 550px;
  img {
    margin: auto;
    width: 100%;
    max-height: 300px;
    max-width: 300px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export { GroupCardStyle };
