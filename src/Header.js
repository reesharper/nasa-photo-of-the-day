// import { render } from '@testing-library/react'
import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // margin-top: -3%;
    background: black;
    height: 15vh;

    h1 {
        display: flex;
        justify-content: flex-start;
        margin: 3%;
        color: white;
    }

    img {
        transform: scale(0.5);
        display: flex;
        justify-content: center;
        margin-right: 8%;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        margin: 4%;
    }

    nav a {
        display: flex;
        text-decoration: none;
        color: white;
        font-size: 1.4rem;
        margin: 20%;

        &:hover {
            transform: scale(1.4)
        }
        transition: all 0.3s ease-in-out;
    }

`

export default function Header() {

    return(
        <>
        <StyledHeader>
            <h1> NASA Image of the Day </h1>
            <img src="https://cdn.iconscout.com/icon/free/png-256/nasa-282190.png"/>
        <nav>
            <a href="https://www.nasa.gov/"> NASA </a>
            <a href="https://api.nasa.gov/#apod"> API </a>
            <a href="https://hubblesite.org/"> Hubble </a>
        </nav>
        </StyledHeader>
        </>
        )

}