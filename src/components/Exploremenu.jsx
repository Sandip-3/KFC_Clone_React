import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Exploremenu() {
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
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
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
  const items = [
    {
      id: 1,
      name: "Deals",
      imageUrl: "https://kfc.com.np/assets/images/deals.webp",
    },
    {
      id: 2,
      name: "Hot & Crispy",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/6410039a13da6.webp",
    },
    {
      id: 3,
      name: "Bucket",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/641003c4791db.webp",
    },
    {
      id: 4,
      name: "Burger",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/641003deb80c3.webp",
    },
    {
      id: 5,
      name: "Smokey Red",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/64100406aa627.webp",
    },
    {
      id: 6,
      name: "Chicken Roll",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/645b8291e02c7.webp",
    },
    {
      id: 7,
      name: "Rice Meals",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/641004308c3be.webp",
    },
    {
      id: 8,
      name: "Snacks",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/6410046748438.webp",
    },
    {
      id: 9,
      name: "Beverage",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/641004c4be848.webp",
    },
    {
      id: 10,
      name: "Fries",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/641004e099b98.webp",
    },
    {
      id: 11,
      name: "Extras",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/64100507d7eb4.webp",
    },
    {
      id: 12,
      name: "Deserts",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/6410052919576.webp",
    },
    {
      id: 13,
      name: "Krushers",
      imageUrl:
        "https://assets.kfc.com.np/storage/uploads/images/category/64100547ac7e9.webp",
    },
  ];
  return (
    <div className="slider-container flex flex-col mb-4 ">
      <div className="explore_text flex mx-6 my-4 justify-between items-center lg:mx-28 mb-2">
        <h1 className="text-xl md:text-3xl font-bold md:px-[12px] text-[#363636]">
          Explore Menu
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
      <div className="md:mx-28 sm:mx-40 mx-24 my-4 w-[50%] md:w-[80%] relative">
        <div
          className={`back_arrow hidden md:absolute z-10 left-[-20px] top-20 h-10 w-10 rounded-full shadow-md bg-white  md:flex items-center justify-center hover:bg-red-600 hover:text-white`}
          onClick={previous}
        >
          <IoIosArrowBack />
        </div>
        <div
          className={`arrow_next hidden absolute z-10 right-[-18px] top-20 h-10 w-10 rounded-full shadow-md bg-white md:flex items-center justify-center hover:bg-red-600 hover:text-white`}
          onClick={next}
        >
          <IoIosArrowForward />
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {items.map((item) => (
            <div className="cart_item overflow-hidden rounded-md  bg-[#f9f8f6] px-[10px] w-[180px] hover:bg-orange-50 ">
              <div className="image_div rounded-md flex items-center justify-center overflow-hidden">
                <img src={item.imageUrl} alt="food_image" />
              </div>
              <p className="text-lg font-bold text-center text-[#363636] py-[10px]">
                {item.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Exploremenu;
