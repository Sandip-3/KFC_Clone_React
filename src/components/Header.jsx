import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import MenuIcon from "@mui/icons-material/Menu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { GiFullMetalBucket } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSearch = () => {
    setSearch((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
      <>
      {sidebar ? <Sidebar sidebar={sidebar} /> : ""}
      <nav className="navbar top-0 sticky z-40 px-12 md:px-24 shadow-md flex items-center justify-between lg:justify-around border bg-white lg:px-24 pt-3 pb-4 ">
        <div className="image_logo  flex items-center space-x-8">
          <div className="logo h-full">
            <img
              className="h-[46]px w-[50px]"
              src="https://assets.kfc.com.np/storage/uploads/images/Kfcheaderlogo/63e64b753ab7a.jpg"
              alt="kfc_logo"
            />
          </div>
          <div className="location hidden lg:flex w-auto bg-gray-200 rounded-3xl space-x-2  items-center pl-4 p-2.5">
            <img src="/images/location-icon.png" alt="" />
            <p className="pr-8 font-light text-gray-400">Kathmandu</p>
          </div>
        </div>
        <div className="menu_items hidden lg:flex list-none ">
          <li>
            <a
              className="px-5 active:text-red-600 font-medium hover:text-red-600"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="px-5 active:text-red-600 font-medium hover:text-red-600"
              href="#"
            >
              Menu
            </a>
          </li>
          <li className="xl:block hidden">
            <a
              className="px-5 active:text-red-600 font-medium hover:text-red-600"
              href="#"
            >
              Nearby Location
            </a>
          </li>
        </div>
        <div className="login_register flex items-center space-x-8 ">
          <div className="search_icon hidden lg:block font-mediun">
            <CiSearch size={30} onClick={showSearch} />
          </div>
          <div className="discount_section hidden cursor-pointer hover:text-red-600 active:text-red-600 lg:flex lg:items-center space-x-2">
            <RiDiscountPercentLine size={30} />
            <p className="offer font-medium">Offers</p>
          </div>
          <div className="profile_login hidden cursor-pointer lg:flex lg:items-center space-x-2">
            <div className=" cursor-pointer hover:text-red-600 active:text-red-600 md:flex md:items-center space-x-2">
              <CgProfile size={30} />
              <p className="offer pl-1 font-medium">Login</p>
            </div>
            <p> / </p>
            <p className="register pl-1 font-medium hidden cursor-pointer hover:text-red-600 active:text-red-600 lg:flex lg:items-center space-x-2">
              Register
            </p>
          </div>
          <div className="flex relative items-center">
            <GiFullMetalBucket className="text-red-600 relative" size={20} />
            <span className="absolute lg:top-[-15px] font-medium top-[-18px] text-xs right-[-10px] lg:right-[25px] text-center py-1 md:px-2 px-2   bg-orange-500 rounded-full text-white">
              0
            </span>
            <p className="hidden lg:block pl-1 font-medium">Cart</p>
          </div>
          <div className="ham_icon block lg:hidden">
            <MenuIcon onClick={toggleSidebar} />
          </div>
        </div>
      </nav>
      {search ? (
        <div className="w-auto hidden lg:flex z-10  fixed  left-[35%] mt-2 ">
          <div className="bg-red border rounded-full w-96  justify-between bg-white  h-12 flex p-[1px]">
            <input
              className="input_search  pl-2 outline-none rounded-full"
              type="text"
              placeholder="Search Product...."
            />
            <div className="bg-red-600 p-1 rounded-r-full text-white flex items-center justify-center ">
              <CiSearch size={30} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
