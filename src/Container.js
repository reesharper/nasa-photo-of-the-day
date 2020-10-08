import React from 'react'
import axios from 'axios'

export default function Container(props) {
const {picture} = props;
const {url, title, explanation, date} = picture;
// console.log(props);
return(
    <>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <img src={url} alt=""/>
        <p>{explanation}</p>
    </>
    )

}
