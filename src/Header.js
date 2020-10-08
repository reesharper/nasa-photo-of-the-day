// import { render } from '@testing-library/react'
import React from 'react'

export default function Header() {

    return(
        <>
        <div className="title-card">
            <h1> NASA Image of the Day </h1>
            <img src="https://cdn.iconscout.com/icon/free/png-256/nasa-282190.png"/>
        </div>
        <nav>
            <a href="https://www.nasa.gov/"> Nasa Website </a>
            <a href="https://api.nasa.gov/#apod"> Nasa API </a>
            <a href="https://hubblesite.org/"> Hubble Website </a>
        </nav>
        </>
        )

}