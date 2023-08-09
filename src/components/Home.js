import React from 'react'
import styled from 'styled-components';
// import ImageSlider from './ImageSlider';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

function Home() {
  return (
    <Container>
      <ImgSlider />
      {/* <Viewers /> */}
    </Container>
  )
}

export default Home
 const Container = styled.main`
 min-height: calc(100vh - 70px);
  padding: 0px calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;

 &:before{
  background: url("/images/home-background.png") center center / cover 
  no-repeat fixed;
  top: 0px;
  left: 0px;
  right:  0px;
  bottom: 0px;
  content: "";
  position: absolute;
  z-index: -1;
`