import { css } from "styled-components";

export const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  desktop1280: 1280,
  desktop1440: 1440,
};

const mediaQuery = {};

Object.keys(sizes).forEach(function (item) {
  mediaQuery[item] = (...args) => css`
    @media (min-width: ${sizes[item]}px) {
      ${css(...args)};
    }
  `;
});

export const theme = {
  colors: {
    primary: "#131426",
    orange: "#FF6B00",
    text1: "#FFFFFF",
  },
  mediaQuery,
};
