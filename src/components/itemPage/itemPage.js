import React from "react";
import styled from "styled-components";
import Card from "./card";

const itemPage = () => {
  return (
    <Container>
      <Wrapper>
        <Card />
      </Wrapper>
    </Container>
  );
};

export default itemPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #334245;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  /* height: 90%; */
  height: 100%;
  min-height: 90vh;
  width: 95%;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #67848a;
  margin: 30px 0;
`;
