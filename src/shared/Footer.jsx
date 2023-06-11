/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="mx-auto px-4 max-w-full ">
        <div className="flex flex-col md:flex-row items-center  md:justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <span>
              <img className="rounded-full w-8 h-8" src={logo} alt="" />
            </span>
            <p className="text-white text-2xl font-bold">Lingui</p>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="">
              <p className="text-gray-400">Contact Info: info@lingui.com</p>
              <p className="text-gray-400">Phone: 123-456-7890</p>
            </div>
            <div className="mr-5 md:ml-10">
              <p className="font[500] text-gray-400">Address:</p>
              <p className="text-gray-400">123 Main St</p>
              <p className="text-gray-400">City, State ZIP</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 text-center">
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="mt-4 border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-600">
            © {currentYear} Lingui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
