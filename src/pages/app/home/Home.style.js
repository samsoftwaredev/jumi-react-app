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

  .banner-description {
    color: #eee;
    font-size: 2rem;
    max-width: 700px;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .banner-action {
    font-size: 0.8rem;
  }

  .banner-button {
    font-weight: 900;
    border-radius: 0px;
    border: none;
    padding: 1em;
    background-color: #e0c3fc;
    &:hover {
      background-color: #ce99ff;
    }
  }
`;

export { BannerStyle };
