import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Header'

function App() {

  const [pictures, setPictures] = useState([]);
  const [currentPic, setCurrentPic] = useState(null);

  const openDetails = id => {
    setCurrentPic(id)
  }

  const closeDetails = () => {
    setCurrentPic(null)
  }

  useEffect(() => {
    const fetchPics = () => {
      axios.get('API')
      .then(res => {
        setPictures(res.data)
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
      {/* <PictureGallery /> */}
    </div>
  );
}

export default App;
