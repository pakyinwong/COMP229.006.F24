import React from 'react';
import photo from '../assets/me.jpg';
import './About.css';
import resume from '../assets/Resume.pdf';

const About = () => {
    
    return (
        <section id='home'>
        <div className="container">
        <div className="about">
            <h1 className="title">About Me</h1>
            <p className='homePara'>I'm Pak Yin Wong. I'm skilled system engineer with experience in administrating Linux servers.</p>
            <p className='homePara'>I've spent the past 10+ years working as system engineer in differnet industry, such as telecommunication, television and healthcare industry. I am mainly responsible for the following tasks:</p>
            <li>Administrated large scale web, app, database servers and VM platform</li>
            <li>Managed and maintained storage platform, including storage area network (SAN) and network-attached storage (NAS), for the server farm</li>
            <li>Conducted vulnerability assessment to ensure network devices being protected</li>
            <li>Performed configuration on F5-Load Balancers, including GTM and LTM, for traffic management</li>
            <br></br>
            <p className='resume'>You can view my resume <a href={resume} target="_blank" rel="noopener noreferrer">here</a> or view my linkedin profile <a href="https://www.linkedin.com/in/pak-yin-wong-033066263/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
        <div className="image">
            <img src={photo} alt='profile' className='photo' /> 
        </div>
    </div>
        </section>
      )
    }
export default About;