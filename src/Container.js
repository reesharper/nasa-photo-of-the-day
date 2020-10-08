import React from 'react'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    100% {
        opacity: 1;
    }
`

const StyledContainer = styled.div`

    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;
    background: lightgrey;
    width: 60%;
    margin: 5% auto;
    padding: 10px;
    border-radius: 50px;
    border: solid 2px black;

    h2 {
        font-size: 3rem;
        margin-top: 4%;
    }

    h4 {
        margin-top: -1%;
        font-size: 1.5rem;
    }

    img {
        margin-top: 4%;

        &:hover {
            transform: scale(1.85)
            
        }
        transition: all .5s ease-in-out;
    }

    p {
        width: 85%;
        margin: 5% auto;
        font-size: 1.3rem;
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
    </StyledContainer>
    </>
    )

}
