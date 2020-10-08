import React from 'react'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledContainer = styled.div`

    // opacity: 0;
    // animation: ${kf} 1s ease-in-out forwards;
    // margin: 4% auto;

    h2 {
        font-size: 3rem;
        margin-top: 4%;
    }

    h4 {
        margin-top: -1%;
    }

    img {
        margin-top: 4%;
    }

    p {
        width: 50%;
        margin: 5% auto;
        font-size: 1.3rem;
    }

    p.footer {
        background: black;
        color: white;
        width: 100%;
        height: 3vh;
        margin-bottom: 0%;
    }

`


export default function Container(props) {
const {picture} = props;
const {url, title, explanation, date} = picture;

return(
    <>
    <StyledContainer>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <img src={url} alt=""/>
        <p>{explanation}</p>
        <p class="footer"> Thanks for Visiting! </p>
    </StyledContainer>
    </>
    )

}
