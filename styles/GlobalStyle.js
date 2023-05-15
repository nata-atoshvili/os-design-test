import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

  body,
  html {
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    background: #131426;
    color: #ffffff;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  input ,
  button {
    margin: 0;
    padding: 0;
    background: transparent;
    border-radius: 0;
    border: 0 none;
    box-shadow: none;
    outline: none;
    color: #ffffff;
  }

  strong,
  b {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    outline: none;
    color: currentColor;
  }

  .swiper {
    position: relative;
    overflow: visible;
    padding-bottom: 75px;
  }

  @media (min-width: 768px) {
    .swiper {
      padding-bottom: 130px;
    }
  }

  .swiper-wrapper {
    position: relative;
    width: max-content;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: #FF6B00;
      position: absolute;
      top: 50%;
      margin-top: -0.5px;
    }
  }

  .swiper-button-next ,
  .swiper-button-prev {
    position: absolute;
    bottom: 0;
    width: 48px;
    height: 48px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    border-radius: 50%;
    z-index: 1;
    background: url(/images/arrow.png) no-repeat 50%;
    background-size: 6px 12px;
  }

  .swiper-button-prev {
    left: 0;
    transform: rotate(180deg);
  }

  .swiper-button-next {
    right: 4.5%;
  }

  @media (min-width: 768px) {
    .swiper-button-next {
      right: 10.5%;
    }
  }

  @media (min-width: 1024px) {
    .swiper-button-next {
      right: 9.5%;
    }
  }

  .swiper-button-disabled {
    cursor: auto;
    opacity: 0.4;
  }

  .swiper-slide {
    &:nth-child(odd) {
      .swiper-slide-inner {
        padding-bottom: 180px;
      }

      .swiper-slide-text {
        overflow: hidden;
        max-height: 100%;
      }
    }
    &:nth-child(even) {
      .swiper-slide-inner {
        padding-top: 188px;
      }
    }
  }
`;

export default GlobalStyle;
