import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ sidebar }) => {
  const [getValue, setGetValue] = useState(sidebar);

  const removeSidebar = () => {
    setGetValue((prevState) => !prevState);
  };
  return (
    <>
      {getValue ? (
        <div className="sidebar_menu  block lg:hidden z-50 fixed bg-white h-full min-w-1/2">
          <div className="cross_icon text-red-600 bg-white shadow-md p-6 flex justify-end">
            <RxCross2 size={30} onClick={removeSidebar} />
          </div>
          <div className="location  flex w-auto m-4 bg-red-600 rounded-md space-x-2  items-center pl-4 p-2.5">
            <img
              className="text-white"
              src="https://kfc.com.np/assets/images/icons/location-icon-white.svg"
              alt=""
            />
            <p className="pr-8 font-medium text-white">Kathmandu</p>
          </div>
          <div className="bg-red m-4 border border-red-600 rounded-full w-80  justify-between bg-white  h-16 flex">
            <input
              className="input_search  pl-4 outline-none rounded-full"
              type="text"
              placeholder="Search"
            />
            <div className="bg-red-600 p-1 w-20 rounded-r-full text-white flex items-center justify-center ">
              <CiSearch size={30} />
            </div>
          </div>
          <div className="menu_items mt-6 m-4 flex flex-col">
            <div className="home  text-2xl font-medium">
              <p className="home active:text-red-600 text-red-600 py-3 border-b-2 border-red-500">
                Home
              </p>
            </div>
            <div className="home  text-2xl font-medium">
              <p className="home active:text-red-600 py-3  border-b-2 border-red-500">
                Menu
              </p>
            </div>
            <div className="home  text-2xl font-medium">
              <p className="home active:text-red-600 py-3  border-b-2 border-red-500">
                Nearby Location
              </p>
            </div>
            <div className="account_section my-8 flex flex-col space-y-4">
              <h1 className="text-3xl font-medium ">My Account</h1>
              <div className="discount_section flex space-x-2 p-1 cursor-pointer hover:text-red-600 active:text-red-600 ">
                <RiDiscountPercentLine size={30} />
                <p className="offer font-medium text-xl">Offers</p>
              </div>
              <div className="discount_section flex space-x-2 p-1 cursor-pointer hover:text-red-600 active:text-red-600 ">
                <CgProfile size={30} />
                <p className="offer font-medium text-xl">
                  <a href="#">Login</a>
                </p>
                <p>/</p>
                <p className="offer font-medium text-xl">
                  <a href="#">Register</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
