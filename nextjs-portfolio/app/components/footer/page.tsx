import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <div className='bg-blue-400 py-40'>
      <div className="text-white font-semibold px-8 text-4xl mx-auto w-[80%]">
        <p>Let's work together 🫂...</p>
        <p>OR meet for coffee ☕</p>
       
        <div className="flex justify-around mt-8">
          <a href="mailto:your.email@example.com" className="text-2xl"><FaEnvelope /></a> {/* Email icon */}
          <a href="tel:+1234567890" className="text-2xl"><FaPhone /></a> {/* Phone icon */}
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaLinkedin /></a> {/* LinkedIn icon */}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaGithub /></a> {/* GitHub icon */}
        </div>
        <p className="italic text-md text-white mt-4 text-center">Created and designed by Tionne Whelan</p>
        <hr className='bg-white w-[80%] h-2' />
      </div>
    </div>
  );
}

export default Footer;
