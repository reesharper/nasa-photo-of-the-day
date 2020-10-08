import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'
import Container from './Container'
import getFormattedDate from "./Date";



function App() {

  const [picture, setPicture] = useState({});
  const [date, setDate] = useState(getFormattedDate());

  useEffect(() => {
    const fetchPics = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=LTFmZ7vh9t42vCfsBrWqJdNXH4tUsOR6AOkMcBqY&date=${date}`)
      .then(res => {
        setPicture(res.data)
      })
      .catch(err => {
        debugger
      })
    }

    fetchPics()
  }, [])

  return (
    <div className="App">
      <Header />
      <Container picture={picture} />
    </div>
  );
}

export default App;
