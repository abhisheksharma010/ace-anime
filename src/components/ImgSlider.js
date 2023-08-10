import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import './sider.css';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
  return (
    <Carousle {...settings}>
        <Wrap>
            <img src="/images/slider-badging.jpg" alt="" srcset="" className='slidimg' />
        </Wrap>
        <Wrap>
            <img src="/images/slider-badag.jpg" alt="" srcset="" className='slidimg' />
        </Wrap>
    </Carousle>
  )
}

export default ImgSlider;

const Carousle =styled(Slider)`
// margin-top:20px;
// height: 40vh;

ul li button{
  &:before{
    font-size: 10px;
    color: rgb(180, 180, 180);
  }
}
slick-active{
  width:100%;
}
li.slick-active bu tton::before{
  color: white;
}
.slick-list{
  overflow:hidden;
}

button{
  // z-index:1;
}
`
const Wrap = styled.div`
height:40vh;
cursor:pointer;
      img {
        height: 100%;
        width: 100%;
        border :4px solid transparent;
        border-radius: 5px;
        box-shadow: rgb(0  0 0/70%) 0px 26px 30px -10px, 
        rgb(0  0 0/75%) 0px 16px 10px -10px;
        transition-duration: 300ms;
         &:hover{
           border: 4px solid white; 
         }
      }
`