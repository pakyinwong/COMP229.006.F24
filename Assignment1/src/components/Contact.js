// File Name: Contact.js
// Student's Name: Pak Yin Wong
// Student ID: 301359647
// Date: 24-Sep-2024

import React from 'react';
import { NavLink } from "react-router-dom";
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact'>
    <div className="contact-page">
      <h1 className='title'>My Contact Information</h1>
      <div className="panel">
        <p>Pak Yin Wong</p>
        <p>Email: pwong149@my.centennicalcollege.ca</p>
        <p>Phone: +123456789</p>
        <p>Location: Toronto</p>
      </div>
      <h1 className='title'>Contact Me</h1>
      <form className='form'>
        <input type='text' className='name' placeholder='Your Name' />
        <input type='email' className='email' placeholder='Your Email' />
        <input type='tel' className='phone' placeholder='Your Phone no.' />
        <textarea className='msg' name='message' rows='4' placeholder='Your Message'></textarea>
        <NavLink to="/"><button type='submit' value='Send' className='submission'>Submit</button></NavLink>
      </form>
    </div>
    </section>
  );
};


export default Contact;