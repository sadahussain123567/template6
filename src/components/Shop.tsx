import Image from "next/image";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";

import React from "react";
import photo1 from "../../public/photo 1.png";
import photo2 from "../../public/photo 2.png";
import photo3 from "../../public/photo 3.png";
import photo4 from "../../public/image 4.png";
const Shop = () => {
  return (
    <div>
      <section className="pt-20 bg-bannerimg2 bg-no-repeat bg-cover bg-bottom  h-[316px]  sm:bg-top md:bg-cover lg:bg-center  relative"></section>
      <div className="flex-row  sm:flex items-center justify-between border-b border-gray-200 py-4 px-6 bg-cream">
        {/* Left Section */}
        <div className=" flex-row sm:flex items-center space-x-4">
          {/* Filter Icon and Text */}
          <button className="flex-row sm:flex  items-center space-x-2 text-gray-700 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6h7m0 0h2a2 2 0 002-2V4m-9 2a2 2 0 100 4m4 6h7m0 0h2a2 2 0 002-2V14m-9 6a2 2 0 100-4m-7-6h3"
              />
            </svg>
            <span>Filter</span>
          </button>

          {/* Grid Icon */}
          <button className="p-2 border border-gray-300 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 7h5M5 11h5m0 0H5m8-4h6m0 0h2m-8 8h6m0 0h2"
              />
            </svg>
          </button>

          {/* List Icon */}
          <button className="p-2 border border-gray-300 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 10h6m0 0H6m6 0h6m0 0h-6m-2 6H6m0 0h2m0 0H6"
              />
            </svg>
          </button>

          {/* Results Info */}
          <span className="text-gray-600 text-sm">
            Showing 1–16 of 32 results
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Show Options */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">Show</span>
            <button className="px-2 py-1 border border-gray-300 text-sm rounded text-gray-700">
              16
            </button>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">Short by</span>
            <button className="px-4 py-1 border border-gray-300 text-sm rounded text-gray-700">
              Default
            </button>
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:pb-14 sm:gap-2 grid  place-content-center pb-7 gap-1">
        <div className="relative group ">
          <Image src={photo1} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Syltherine</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo2} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Leviosa</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            -50%
          </div>
          <Image src={photo3} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Lolito</h4>
            <p>Luxury big sofa</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 7.000.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo4} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Respira</h4>
            <p>Outdoor bar table</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 500.000</h4>
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:pb-14 sm:gap-2 grid place-content-center pb-7 gap-1">
        <div className="relative group">
          <Image src={photo1} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Syltherine</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo2} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Leviosa</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            -50%
          </div>
          <Image src={photo3} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Lolito</h4>
            <p>Luxury big sofa</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 7.000.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo4} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Respira</h4>
            <p>Outdoor bar table</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 500.000</h4>
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:pb-14 sm:gap-2 grid place-content-center pb-7 gap-1">
        <div className="relative group">
          <Image src={photo1} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Syltherine</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo2} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Leviosa</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            -50%
          </div>
          <Image src={photo3} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Lolito</h4>
            <p>Luxury big sofa</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 7.000.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo4} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Respira</h4>
            <p>Outdoor bar table</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 500.000</h4>
          </div>
        </div>
      </div>
      <div className=" sm:flex sm:pb-14 sm:gap-2 grid place-content-center pb-7 gap-1">
        <div className="relative group">
          <Image src={photo1} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Syltherine</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo2} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Leviosa</h4>
            <p>Stylish Cafe Chair</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 2.500.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            -50%
          </div>
          <Image src={photo3} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Lolito</h4>
            <p>Luxury big sofa</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 7.000.000</h4>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
            New
          </div>
          <Image src={photo4} alt="image" className="w-full h-auto" />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
              Add to cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300">Share</button>
              <button className="hover:text-gray-300">Compare</button>
              <button className="hover:text-gray-300">Like</button>
            </div>
          </div>

          <div className="mt-4 text-">
            <h4 className="font-semibold text-lg sm:text-2xl">Respira</h4>
            <p>Outdoor bar table</p>
            <h4 className="font-semibold text-lg sm:text-2xl">Rp 500.000</h4>
          </div>
        </div>
      </div>

      <div className=" pb-10 flex justify-center items-center  gap-2">
        <div className="h-[60px] w-[60px] bg-yellow-700 items-center rounded-[10px] flex justify-center text-white">
          1
        </div>
        <div className="h-[60px] w-[60px] bg-[#f8f2ea] rounded-[10px]  flex justify-center items-center">
          2
        </div>
        <div className="h-[60px] w-[60px] bg-[#f8f2ea] rounded-[10px] flex justify-center items-center">
          3
        </div>
        <div className="h-[60px] w-[98px] bg-[#f8f2ea] rounded-[10px] flex justify-center items-center">
          Next
        </div>
      </div>

      <div className="bg-[#f8f2ea] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* High Quality */}
          <div className="flex flex-col items-center">
            <FaTrophy className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">High Quality</h3>
            <p className="text-gray-500">crafted from top materials</p>
          </div>

          {/* Warranty Protection */}
          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">Warranty Protection</h3>
            <p className="text-gray-500">Over 2 years</p>
          </div>

          {/* Free Shipping */}
          <div className="flex flex-col items-center">
            <FaShippingFast className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">Free Shipping</h3>
            <p className="text-gray-500">Order over 150 $</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <FaHeadset className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">24 / 7 Support</h3>
            <p className="text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
