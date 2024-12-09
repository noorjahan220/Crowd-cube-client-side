import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav>
          <h6 className="font-bold uppercase mb-4 text-blue-400">Services</h6>
          <ul>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Branding</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Design</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Marketing</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Advertisement</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-bold uppercase mb-4 text-blue-400">Company</h6>
          <ul>
            <li><a className="block mb-2 hover:text-blue-300" href="#">About us</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Contact</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Jobs</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Press kit</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-bold uppercase mb-4 text-blue-400">Legal</h6>
          <ul>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Terms of use</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Privacy policy</a></li>
            <li><a className="block mb-2 hover:text-blue-300" href="#">Cookie policy</a></li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto mt-8 px-4 border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:contact@yourcompany.com" aria-label="Email" className="hover:text-blue-300">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
