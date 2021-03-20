import React from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default LoadingPage;
