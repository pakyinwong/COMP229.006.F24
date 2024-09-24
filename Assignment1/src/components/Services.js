// File Name: Services.js
// Student's Name: Pak Yin Wong
// Student ID: 301359647
// Date: 24-Sep-2024

import React from "react";
import './Services.css';
import linux from '../assets/linux.jpg';
import mysql from '../assets/mysql.jpg';
import ansible from '../assets/ansible.jpg';
const Services = () => {
  return (
    <section id='skills'>
      <h1 className="title">The services I can provide:</h1>
      <div className="bars">
        <div className="bar">
          <img src={linux} alt="linux" className="skillImg" />
          <div className="skillText">
            <h2>Linux</h2>
            <p>I have over 10+ years experience on linux administration, including Redhat, Centos and Ubuntu.</p>
          </div>
        </div>
      </div>
      <div className="bars">
        <div className="bar">
          <img src={mysql} alt="mysql" className="skillImg" />
          <div className="skillText">
            <h2>MySQL</h2>
            <p>I have knowledge to setup a MYSQL database on Linux servers.</p>
          </div>
        </div>
      </div>
      <div className="bars">
        <div className="bar">
          <img src={ansible} alt="ansible" className="skillImg" />
          <div className="skillText">
            <h2>Ansible</h2>
            <p>I am knowledgeable to implement automation task by using Ansible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;