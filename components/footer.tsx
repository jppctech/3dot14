// components/Footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#13141E] text-gray-300 py-10 px-4 w-full">
      <div className="max-w-screen-2xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm w-full justify-center">
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Our Approach</a></li>
              <li><a href="#" className="hover:text-gray-400">Machine Learning</a></li>
              <li><a href="#" className="hover:text-gray-400">Creative Technology</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">User Acquisition</a></li>
              <li><a href="#" className="hover:text-gray-400">Retargeting</a></li>
              <li><a href="#" className="hover:text-gray-400">Gaming</a></li>
              <li><a href="#" className="hover:text-gray-400">Branding</a></li>
              <li><a href="#" className="hover:text-gray-400">Self-serving DSP</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resource</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-400">Glossary</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t max-w-screen-2xl mx-auto border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <img src="/path/to/logo.png" alt="Logo" className="w-5 h-5" />
          <span>3.14</span>
        </div>
        <p className="text-gray-400 mt-4 md:mt-0">
          ©2022 3dot14 — All Rights Reserved
        </p>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
