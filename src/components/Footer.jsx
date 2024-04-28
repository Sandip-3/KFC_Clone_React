import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer w-screen h-auto mt-4 bg-[#292d32]">
        <div className="logo w-[80%] mx-auto flex items-ceter  justify-center">
          <div className="image my-4 w-20 h-20">
            <img
              src="https://assets.kfc.com.np/storage/uploads/images/FooterTMblack/63e64a94f01ae.png"
              alt="footer_image"
            />
          </div>
        </div>
        <div className="items w-[80%] mx-auto text-[#F2F3F8] py-6  list-none font-semibold flex flex-col justify-center items-center md:flex-row md:justify-around ">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Disclaimer</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </div>
        <div className="social_icons w-[80%] text-[#F2F3F8] gap-6 py-4 mx-auto flex items-ceter  justify-center">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
        </div>
        <div className="design w-[80%] mx-auto flex items-ceter gap-4  justify-center">
          <div className="design w-4 h-12 bg-white"></div>
          <div className="design w-4 h-12 bg-white"></div>
          <div className="design w-4 h-12 bg-white"></div>
        </div>
      </div>
      <div className="naming-section w-screen bg-[#10121D]">
        <div className="naming_section  w-[80%] md:mx-auto  flex flex-col md:flex-row md:items-center px-2 md:px-12 justify-start md:justify-between">
          <p className="copyright text-[#F2F3F8] md:py-2 text-md md:text-lg font-semibold">
            ©2024 <span className="text-red-600">KFC_Syangja®</span>
            <span>.All Rights Reserved</span>
          </p>
          <p className="powerby mb-4 text-[#F2F3F8] md:py-2 text-md md:text-lg  font-semibold">
            Powered By <span className="text-red-600 font-light">Sandip</span>
            <span> Dev</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
