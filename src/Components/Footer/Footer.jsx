import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav>
          <h6 className="font-bold uppercase mb-4">Services</h6>
          <ul>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Branding</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Design</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Marketing</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Advertisement</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-bold uppercase mb-4">Company</h6>
          <ul>
            <li><a className="block mb-2 hover:text-gray-400" href="#">About us</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Contact</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Jobs</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Press kit</a></li>
          </ul>
        </nav>
        <nav>
          <h6 className="font-bold uppercase mb-4">Legal</h6>
          <ul>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Terms of use</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Privacy policy</a></li>
            <li><a className="block mb-2 hover:text-gray-400" href="#">Cookie policy</a></li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto mt-8 px-4 border-t border-gray-700 pt-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:contact@yourcompany.com" aria-label="Email" className="hover:text-gray-400">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
