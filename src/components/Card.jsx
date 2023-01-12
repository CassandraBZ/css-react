import React from "react";

import styled from "styled-components";

import cardPicture from "../assets/egypt.jpg";

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  width: 600px;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
  font-family: "Jost", sans-serif;
  font-weight: bold;
  margin-top: 1em;
  margin-left: 2rem;
`;

const Info = styled.h2`
  color: #8b8b8b;
  font-weight: 400;
  font-family: "Jost", sans-serif;
  font-size: 1.3rem;
  margin-left: 2rem;
  margin-top: 0rem;
`;

const Paragraph = styled.p`
  color: #0d1a26;
  font-weight: 400;
  font-family: "Jost", sans-serif;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  background: linear-gradient(91.4deg, #8f88d2 4.28%, #59aaa8 96.47%);
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px 12px 12px;
  letter-spacing: 1px;
  margin: 2rem 2rem 3rem 15rem;
`;

const Container2 = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 600px;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const Element1 = styled.div`
  background-color: #aa8dd8;
  padding: 10px;
  font-weight: bold;
  font-family: "Jost", sans-serif;
  font-size: 15px;
  color: #fff;
  border-radius: 10px 0px 0px 10px;
`;
const Element2 = styled.div`
  background-color: #6b52b2;
  padding: 10px;
  font-weight: bold;
  font-family: "Jost", sans-serif;
  font-size: 15px;
  color: #fff;
`;
const Element3 = styled.div`
  background-color: #5ca8ab;
  padding: 10px;
  font-weight: bold;
  font-family: "Jost", sans-serif;
  font-size: 15px;
  color: #fff;
  border-radius: 0px 10px 10px 0px;
`;

function Card() {
  return (
    <>
      <Container>
        <Img src={cardPicture} alt="egypt" />
        <Title>Le phare à On</Title>
        <Info> Le Mans</Info>
        <Container2>
          <Element1>Fouille</Element1>
          <Element2>Manipulation</Element2>
          <Element3>Réflexion</Element3>
        </Container2>
        <Paragraph>
          Vous avez reçu une commande bien particulière ! Vous pénétrer dans le
          bureau parisien d'un grand naturaliste, en 1840. A vous d'élucider le
          mystère du phare à On.
        </Paragraph>
        <Button>Réservez</Button>
      </Container>
    </>
  );
}

export default Card;
