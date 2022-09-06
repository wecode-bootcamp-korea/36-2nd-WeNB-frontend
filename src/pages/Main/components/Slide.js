import React from 'react';
import styled from 'styled-components';
import slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = ({ item }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledSlide {...settings}>
      {item.map((img, index) => (
        <img key={index} src={img} alt="숙소이미지" />
      ))}
    </StyledSlide>
  );
};

const StyledSlide = styled(slider)`
  .slick-slide {
    display: inline-block;
  }

  .slick-list {
    width: 100%;
    z-index: 100;
    overflow: hidden;
  }

  .slick-prev {
    z-index: 9999;
    width: 50px !important;
    opacity: 0;
  }
  .slick-next {
    z-index: 9999;
    width: 50px !important;
    opacity: 0;
  }

  .slick-prev {
    left: 5px;
  }
  .slick-next {
    right: 5px;
  }

  .slick-prev:before {
    font-size: 30px;
  }
  .slick-next:before {
    font-size: 30px;
  }

  .slick-prev:hover {
    opacity: 1;
  }
  .slick-next:hover {
    opacity: 1;
  }

  .slick-prev:hover:before {
    color: white;
  }
  .slick-next:hover:before {
    color: white;
  }

  .slick-dots {
    z-index: 999;
    position: absolute;
    bottom: 10px;

    li button:before {
      color: white;
    }
  }
`;
export default Slide;
