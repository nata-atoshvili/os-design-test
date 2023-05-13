import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";

type SlideProps = {
  title: string;
  text: string;
};

type Props = {
  slides: SlideProps[];
};

const PageDownload: React.FC<Props> = ({ slides }) => {
  return (
    <Root>
      <Swiper
        slidesPerView={3.7}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.7,
          },
          1024: {
            slidesPerView: 3.7,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Slide className="swiper-slide-inner">
              <SlideTitle>{slide.title}</SlideTitle>
              {slide.text}
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Root>
  );
};

export default PageDownload;

const Root = styled.div``;

const Slide = styled.div`
  position: relative;
  height: 330px;

  ${({ theme }) => theme.mediaQuery.tablet`
    height: 300px;
  `}

  ${({ theme }) => theme.mediaQuery.desktop`
    
  `}

  &:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: 157px;
    background: #ff6b00;

    ${({ theme }) => theme.mediaQuery.tablet`
      top: 142px;
    `}
  }
`;

const SlideTitle = styled.div`
  margin-bottom: 10px;
  font-size: 30px;

  ${({ theme }) => theme.mediaQuery.desktop`
    margin-bottom: 0;
    font-size: 36px;
  `}
`;
