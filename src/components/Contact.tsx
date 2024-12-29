import React from "react";
import { ChevronRight } from "lucide-react";
import image1 from "../../public/banner.png";
import Image from "next/image";
import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <section className="pt-8 bg-bannerimg2 bg-no-repeat bg-cover bg-bottom h-[316px]  relative">
        <div className="pt-16 grid place-content-center ">
          <div className="pl-6 sm:pl-12">
            {" "}
            <Image
              src={image1}
              alt="image"
              className=" h-9 w-9 sm:h-[77px] sm:w-[77px]"
            />
          </div>

          <div>
            <p className="font-poppins font-medium text-[22px] sm:text-[48px]">
              Contact
            </p>
          </div>
          <div className="flex gap-0 sm:gap-2 pl-2 sm:pl-7">
            <p className=" text-[9px] sm:text-[16px] font-poppins font-medium">
              Home
            </p>
            <ChevronRight className="h-3 sm:h-6" />
            <p className="text-[9px] sm:text-[16px] font-poppins font-light">
              Contact
            </p>
          </div>
        </div>
      </section>
      <div className="pt-16 pb-16">
        <p className=" text-center text-[36px] font-popins font-medium">
          Get in Touch With Us
        </p>
        <p className=" text-center  text-[16px] font-popins font-normal ">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-yellow-500">📍</div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-500">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-yellow-500">📞</div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-500">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl text-yellow-500">⏰</div>
              <div>
                <h3 className="font-semibold">Working Time</h3>
                <p className="text-gray-500">
                  Monday–Friday: 9:00 - 22:00
                  <br />
                  Saturday–Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Abc"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Abc@def.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="This is an optional"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  // rows="4"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Hi! I’d like to ask about"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f2ea]  ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaTrophy className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">High Quality</h3>
            <p className="text-gray-500">crafted from top materials</p>
          </div>

          <div className="flex flex-col items-center">
            <FaShieldAlt className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">Warranty Protection</h3>
            <p className="text-gray-500">Over 2 years</p>
          </div>

          <div className="flex flex-col items-center">
            <FaShippingFast className="text-4xl text-gray-800 mb-2" />
            <h3 className="text-lg font-bold">Free Shipping</h3>
            <p className="text-gray-500">Order over 150 $</p>
          </div>

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

export default Contact;
