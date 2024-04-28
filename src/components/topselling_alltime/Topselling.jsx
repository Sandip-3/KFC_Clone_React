import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    id: 1,
    title: "Smoking Red 5pc",
    description:
      "5pcs of colonel's signature Smoky RedSpicy, red, grilled chicken",
    price: "1349",
    imageUrl:
      "https://assets.kfc.com.np/storage/uploads/images/product/648accb7ed76c.webp",
  },
  {
    id: 2,
    title: "5pc Hot & Crispy Bucket",
    description: "5pcs of signature Hot & Crispy hicken at deal price",
    price: "1249",
    imageUrl:
      "https://assets.kfc.com.np/storage/uploads/images/product/649158430c76e.webp",
  },
];

const Topselling = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,

          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="top_selling  w-[90%] flex flex-col  mx-auto">
      <div className="flex mx-4  my-4  justify-between items-center lg:mx-2 mb-2">
        <h1 className="top_selling_text mx-2 md:mx-14  py-6 text-xl md:text-3xl font-bold text-[#363636]">
          Top Selling Product
        </h1>
        <div className="flex space-x-8">
          <div
            className={`back_arrow md:hidden  h-7 w-7 rounded-full shadow-md bg-white  flex items-center justify-center hover:bg-red-600 hover:text-white`}
            onClick={previous}
          >
            <IoIosArrowBack />
          </div>
          <div
            className={`arrow_next md:hidden  h-7 w-7 rounded-full shadow-md bg-white flex items-center justify-center hover:bg-red-600 hover:text-white`}
            onClick={next}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="w-[100%]  xl:ml-[-280px]">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {items.map((item) => (
            <div className="cart_div group w-[400px]  border hover:border-red-600 rounded-md bg-white p-2 flex flex-col">
              <div className="image_div rounded-md flex items-center justify-center overflow-hidden bg-[#f9f8f6] ">
                <img
                  className="transform transition duration-500 group-hover:scale-110"
                  src={item.imageUrl}
                  alt="top_selling_item"
                />
              </div>
              <div className="tag_text  flex justify-start mt-2 pl-2 ">
                <img
                  src={"https://kfc.com.np/assets/images/icons/non-veg.svg"}
                  alt=""
                />
                <p className="text text-[#32373D] px-1">{item.title}</p>
              </div>
              <div className="text_div">
                <p className="normal_text px-2 py-3 font-light text-[#767676]">
                  {item.description}
                </p>
              </div>
              <div className="price_cart px-2 flex justify-between items-center ">
                <p className=" font-bold">
                  NRS <span>{item.price}</span>
                </p>
                <div className="cart group  w-auto h-10 flex space-x-1 mb-2  items-center p-1 text-[#E5002B] border-[1.5px] border-red-500 rounded-md  hover:bg-red-600 hover:text-white ">
                  <CiShoppingBasket size={20} />
                  <p className="hover:text-white ">Add to cart</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Topselling;
