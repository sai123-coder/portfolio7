// components/Footer.js
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => (
  <footer className="relative z-10 mt-20 border-t border-gray-700/30 pt-10 text-center">
    <div className="flex justify-center space-x-6 text-gray-400 text-2xl">
      <a href="https://github.com/sai123-coder"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-teal-400 transition"><FaGithub /></a>
      <a href="https://www.instagram.com/sai001_yvn/"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-teal-400 transition"><FaInstagram /></a>
      <a href="https://leetcode.com/u/Keerthi_sai001/"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-teal-400 transition"><SiLeetcode /></a>
      <a href="https://www.linkedin.com/in/upputholla-keerthi-sai-kumar-431283280/"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-teal-400 transition"><FaLinkedin /></a>
      <a href="https://www.geeksforgeeks.org/profile/upputholaky4cz"
         target="_blank"
         rel="noopener noreferrer"
         className="hover:text-teal-400 transition"><SiGeeksforgeeks /></a>
    </div>
    <p className="text-sm text-gray-500 mt-4">©{ new Date().getFullYear() }
    UPPUTHOLLA KEERTHI SAI.All rights reserved. </p>
  </footer>
);

export default Footer;