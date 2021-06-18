import { Row } from "reactstrap";
import styled from "styled-components";

const BannerStyle = styled.div`
  .banner-header {
    color: white;
    font-weight: 900;
    font-size: 4rem;
    max-width: 200px;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .banner-header-sub {
    align-text: right;
    color: white;
    font-weight: 900;
    font-size: 2rem;
    max-width: 200px;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .banner-description {
    color: #eee;
    font-size: 2rem;
    max-width: 700px;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .banner-description-sub {
    color: #eee;
    font-size: 1.5rem;
    max-width: 700px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .banner-action {
    font-size: 0.8rem;
  }
`;

const ImageStyle = styled.img`
  margin-top: 20px;
  transform: rotate(4deg);
  border-radius: 20px;
  box-shadow: -9px 21px 29px -14px rgba(0, 0, 0, 0.65);
`;

const RowStyle = styled(Row)`
  margin-bottom: 20em;
  @media (max-width: 768px) {
    margin-bottom: 5em;
  }
`;

export { BannerStyle, ImageStyle, RowStyle };
