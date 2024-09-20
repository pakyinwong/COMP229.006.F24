import React from 'react';
import rock from '../assets/game.png'
import spa from '../assets/spa.png'
import db from '../assets/db.jpeg'
import './Projects.css';


const Projects = () => {
    return (
        <section id='home'>
        <div className="container">
        <div className="about">
            <h1 className="title">Project I: Rock-Paper-Scissors</h1>
            <p className='homePara'>I have developed a rock-paper-scissors game in javascript via Youtube tutorial. You can play rock-paper-scissors yourself or play automatically. The result will be stored and displayed in the web page. The score can be reset by clicking reset score button.</p>
        </div>
        <div className="image">
            <img src={rock} alt='rock-paper-scissors' className='photo' /> 
        </div>
    </div>
    <div className="container">
        <div className="about">
            <h1 className="title">Project II: SPA Website (Final Project in semester 1)</h1>
            <p className='homePara'>We have formed a group of 3 classmates in semester 1 for the final project, which was developing a spa website. In this project, I'm mainly responsible for writing a content and seraching for suitable photo to best describe the spa company.</p>
        </div>
        <div className="image">
            <img src={spa} alt='spa' className='photo' /> 
        </div>
    </div>
    <div className="container">
        <div className="about">
            <h1 className="title">Project III: E-Commerce Database Design (Final Project in semester 2)</h1>
            <p className='homePara'>We have formed a group of 2 classmates in semester 2 for the final project which was designing the Database. We were free to choose any topic so we chose to design a e-commerce database as it was elsewhere. We thought that by designing this database, we can learn more about the e-commerce industry. I'm mainly responsible for thinking of the class and attribute component.</p>
        </div>
        <div className="image">
            <img src={db} alt='db' className='photo' /> 
        </div>
    </div>
        </section>
      )
    }

export default Projects;