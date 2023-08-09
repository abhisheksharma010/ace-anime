import React from 'react'
import styled from 'styled-components'
import './header.css';

function Header() {
  return (
    <>
    <containerr className='nav'>
        <img src="/images/logo.webp" alt='logo' className='logo'/>
        <containerr className="navmenu">
            <a href="">
                <img src="/images/home-icon.svg" alt="" srcset="" />
                <span>Home</span>
            </a>
            <a href="">
                <img src="/images/home-icon.svg" alt="" srcset="" />
                <span>Trending</span>
            </a>
            <a href="">
                <img src="/images/home-icon.svg" alt="" srcset="" />
                <span>Latest</span>
            </a>
           
            <a href="">
                <img src="/images/watchlist-icon.svg" alt="" srcset="" />
                <span>Watchlist</span>
            </a>
            <a href="">
                <img src="/images/home-icon.svg" alt="" srcset="" />
                <span>Movies</span>
            </a>
            <a href="">
                <img src="/images/search-icon.svg" alt="" srcset="" />
                <span>Search</span>
            </a>
        </containerr>
        <img src="/images/user.jpg" alt=""  className='userimg'/>

    </containerr>
    </>
  )
}

export default Header
const containerr = styled.div`
color: red;
text-color:blue;
font-size: 4rem;
`
