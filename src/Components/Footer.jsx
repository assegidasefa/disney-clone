import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center pb-10 bg-gray-900">
      <div className="flex flex-col w-1/4 justify-center items-center">
        <h1 className="font-serif text-2xl text-gray-500 pb-2">Follow me</h1>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/assegid-assefa" target="_blank">
            <FaLinkedin
              className="hover:scale-110 cursor-pointer text-white hover:text-gray-400"
              size={24}
            />
          </a>
          <a href="https://github.com/assegidasefa" target="_blank">
            <FaGithub
              className="hover:scale-110 cursor-pointer text-white hover:text-gray-400"
              size={24}
            />
          </a>
          <a href="https://www.instagram.com/assefaassegid/" target="_blank">
            <FaInstagram
              className="hover:scale-110 cursor-pointer text-white hover:text-gray-400"
              size={24}
            />
          </a>
          <a href="https://www.facebook.com/assegid.assefa.71" target="_blank">
            <FaFacebook
              className="hover:scale-110 cursor-pointer text-white hover:text-gray-400"
              size={24}
            />
          </a>
          <a href="https://twitter.com/assegidassefa7" target="_blank">
            <FaTwitter
              className="hover:scale-110 cursor-pointer text-white hover:text-gray-400"
              size={24}
            />
          </a>
        </div>
        <div className="pt-5 flex items-center justify-center text-xs text-gray-200 gap-2">
          <div className="flex items-center justify-center">
            Coperight
            <FaCopyright />
          </div>
          2023 , Assegid Assefa
        </div>
      </div>
    </div>
  );
};

export default Footer;
