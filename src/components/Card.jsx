import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 20rem;
  padding: 50px;
  color: #444;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
`;

function Card() {
  return (
    <Container>
      <Title>Example Styled-Components</Title>
    </Container>
  );
}

export default Card;
