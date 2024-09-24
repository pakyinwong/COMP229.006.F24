// File Name: Home.js
// Student's Name: Pak Yin Wong
// Student ID: 301359647
// Date: 24-Sep-2024

import React from 'react';
import './home.css';
import bg from '../assets/photo.png';
import { NavLink } from "react-router-dom";

//Render the home page
const Home = () => {
  return (
    <section id='home'>
      <div className='homeContent'>
        <span className='hello'>Hello,</span>
        <span className='homeText'>I'm <span className='homeName'>Pak Yin Wong</span><br />System Engineer</span>
        <p className='homePara'>I'm skilled system engineer with experience in administrating Linux servers.</p>
       
        <NavLink to="/about"><button className='meBtn'>
                  <i className="fa-solid fa-address-book"></i> Know more about me
                  </button></NavLink>
      </div>
      <img src={bg} alt='profile' className='bg' />
    </section>
  )
}

export default Home