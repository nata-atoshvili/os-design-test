import React from "react";
import styled from "styled-components";
import Slider from "components/Slider";

const title = "История";

const description =
  "Устойчивая стратегия роста, концентрация на основных компетенциях и клиентоориентированность — ключевые факторы успеха на рынке металлопродукции в течение 17 лет.";

const sliderItems = [
  {
    title: "2003",
    text: "Основание предприятия по торговле чёрным металлопрокатом",
  },
  {
    title: "2008",
    text: "Включение в ассортимент цветных металлов и нержавейки",
  },
  {
    title: "2013",
    text: "Открытие подразделения по металлообработке",
  },
  {
    title: "2020",
    text: "Открытие собственного завода по обработке металлов и производству металлоконструкций",
  },
];

const Home = () => {
  return (
    <Root>
      <Container>
        <TextContainer>
          <H1>{title}</H1>
          <Description>{description}</Description>
        </TextContainer>
      </Container>
      <Slider slides={sliderItems} />
    </Root>
  );
};

export default Home;

const Root = styled.div`
  padding-top: 48%;
  padding-bottom: 48%;
  padding-left: 4.5%;

  ${({ theme }) => theme.mediaQuery.tablet`
    padding-top: 33%;
    padding-bottom: 33%;
    padding-left: 10.5%;
  `}

  ${({ theme }) => theme.mediaQuery.desktop`
    padding-top: 6%;
    padding-bottom: 6%;
    padding-left: 9.5%;
  `}
`;

const Container = styled.div``;

const H1 = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;

  ${({ theme }) => theme.mediaQuery.tablet`
    font-size: 40px;
  `}

  ${({ theme }) => theme.mediaQuery.desktop`
    margin-bottom: 24px;
    font-size: 46px;
  `}
`;

const TextContainer = styled.div`
  margin-bottom: 12.5%;
  padding-right: 20px;

  ${({ theme }) => theme.mediaQuery.tablet`
    margin-bottom: 12%;
    padding-right: 0;
    max-width: 614px;
  `}

  ${({ theme }) => theme.mediaQuery.desktop`
    margin-bottom: 5.5%;
    max-width: 664px;
  `}
`;

const Description = styled.p``;
