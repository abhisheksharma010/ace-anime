import React from 'react'
import styled from 'styled-components';


import './viewer.css';


function Viewers() {
  return (
    <Container>
        <Wrap>
            {/* <img src="/images/img1.png" alt="" srcset="" /> */}
            <img src="/images/viewers-disney.png" alt="" srcset="" />
        </Wrap>
        <Wrap>
        <img src="/images/viewers-disney.png" alt="" srcset="" />
            {/* <img src="/images/img1.png" alt="" srcset="" /> */}
        </Wrap>
        <Wrap>
        <img src="/images/viewers-disney.png" alt="" srcset="" />
            {/* <img src="/images/img1.png" alt="" srcset="" /> */}
        </Wrap>

        <Wrap>
          <img src="/images/viewers-disney.png" alt="" srcset="" />    {/* <img src="/images/img1.png" alt="" srcset="" /> */}
        </Wrap>
        <Wrap>
        <img src="/images/viewers-disney.png" alt="" srcset="" />
            {/* <img src="/images/img1.png" alt="" srcset="" /> */}
        </Wrap>
    </Container>
    
  )
}

export default Viewers;

const Container = styled.div`
margin-top:30px;
display:grid;
grid-gap:25px;
padding :30px 0px 26px;
grid-template-columns: repeat(5,minmax(0,1fr));
`
const Wrap = styled.div`
          border: 3px solid rgb(200 200 179/10%);
          border-radius: 20px;
          cursor:pointer;
          box-shadow: rgb(0  0 0/70%) 0px 26px 30px -10px, 
          rgb(0  0 0/75%) 0px 16px 10px -10px;
          transition: all 250ms  cubic-bezier(0.1, 0.7, 1.0, 0.1) 0s;
          img{
            width:100%;
            height:100%;
            object-fit:cover;

          }
          &:hover{
            
          box-shadow: rgb(0  0 0/70%) 0px 56px 50px -60px;
            transform:scale(1.06);
            border: 3px solid rgb(200 200 179/80%);
          }
`