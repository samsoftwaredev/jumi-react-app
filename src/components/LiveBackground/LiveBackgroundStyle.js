import styled from "styled-components";

const LiveBackgroundStyle = styled.div`
  width: 100%;
  position: relative;
  i:nth-child(1) {
    left: 0%;
    bottom: 0%;
    animation-delay: 1s;
  }
  i:nth-child(2) {
    left: 50%;
    bottom: 0%;
    animation-delay: 3s;
  }
  i:nth-child(3) {
    left: 35%;
    bottom: 0%;
    animation-delay: 6s;
  }
  i:nth-child(4) {
    left: 80%;
    bottom: 0%;
    animation-delay: 8s;
  }
  i:nth-child(5) {
    left: 12%;
    bottom: 0%;
    animation-delay: 9s;
  }

  i {
    position: absolute;
    display: block;
    list-style: none;
    animation: animate 15s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0;
      border-radius: 0;
    }
    30% {
      opacity: 0.5;
      border-radius: 0;
    }
    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`;

const ItemStyle = styled.i`
  z-index: 1;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: #fff;
`;

export { LiveBackgroundStyle, ItemStyle };
