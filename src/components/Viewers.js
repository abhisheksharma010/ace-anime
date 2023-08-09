import React from 'react'
import styled from 'styled-components';

function Viewers() {
  return (
    <container>
        <Wrap>
            <img src="/images/img1.png" alt="" srcset="" />
        </Wrap>
        <Wrap>
            <img src="/images/img1.png" alt="" srcset="" />
        </Wrap>
        <Wrap>
            <img src="/images/img1.png" alt="" srcset="" />
        </Wrap>
        <Wrap>
            <img src="/images/img1.png" alt="" srcset="" />
        </Wrap>
        <Wrap>
            <img src="/images/img1.png" alt="" srcset="" />
        </Wrap>
    </container>
  )
}

export default Viewers;

const container = styled.div`
      margin-top:30px;
      display:grid;
      grid-template-covers:a
`
const Wrap = styled.div`
    img {
        width:100%;
        heigth:100%;
        object-fit:cover;
       }
`