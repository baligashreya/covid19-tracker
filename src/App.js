import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from "./components/Navbar"
import Global from "./components/Global"
import Country from "./components/Country"
import News from "./components/News"
import IconCarousel from './components/IconCarousel';
import ScrollAnimation from 'react-animate-on-scroll'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Footer from './components/Footer'


require('dotenv').config()

 
function App() {
  const initialGlobal=''
  const initialLoading=true
  const [global ,setGlobal]=useState(initialGlobal);
  const [loading, setLoading]=useState(initialLoading);

  useEffect(() => {
      axios.get('https://corona.lmao.ninja/all')
      .then(res => {
      setGlobal(res.data)
      setLoading(false)
      })
      .catch(error=>{
      console.log(error)
      })  
  },[])
  return (
      <div className="App">
      <Navbar />
      {loading ? <div className="text-center mt-4"><Loader type="ThreeDots" color="black" height={40} width={40} /></div>:
            <React.Fragment>
            <IconCarousel />
            <div className="container">
            <div className="container mt-3 bg-light round">
            <Global global={global}/>
            </div>
            <div className="container mt-3 bg-light round">
                <ScrollAnimation animateIn="fadeIn">
                    <Country />
                </ScrollAnimation>
            </div>
            </div>
            <ScrollAnimation animateIn="fadeIn">
                <News />
            </ScrollAnimation>
            <Footer />
            </React.Fragment>
            }
      </div>
    
  );
}


export default App

