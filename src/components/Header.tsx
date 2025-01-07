"use client";
import { useState } from "react";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import photo from "../../public/banner.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex fixed top-0 left-0 w-full h-12 sm:h-24 z-50 bg-white">
      <nav className="justify-between pt-2 flex items-center  w-full px-4">
        <div className=" flex items-center gap-2 justify-center sm:justify-start">
          <Image
            src={photo}
            alt="navbar"
            className="h-[20px] w-[20px] sm:h-[32px] sm:w-[50px]"
          />
          <span className="text-[20px] sm:text-[34px] font-bold font-Montserrat">
            Furniro
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-4 sm:gap-8 md:gap-16 lg:gap-16 xl:gap-16 2xl:gap-20 text-black justify-center ">
          <li>
            <Link href="/" className="text-[25px] font-popins font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-[25px]  font-popins font-medium">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[25px]  font-popins font-medium">
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[25px]  font-popins font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex   justify-center sm:justify-end ">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Icons */}
        <div className="hidden sm:flex gap-3 sm:gap-5">
          <IoPersonOutline className="h-[28px]" />
          <IoSearch className="h-[28px]" />
          <FaRegHeart className="h-[28px]" />
          <AiOutlineShoppingCart className="h-[28px]" />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg sm:hidden">
          <ul className="flex flex-col items-start gap-4 p-4 text-black">
            <li>
              <Link
                href="/"
                className="font-popins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="font-popins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="font-popins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-popins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
