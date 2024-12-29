import React from "react";
import { ChevronRight } from "lucide-react";
import image1 from "../../public/banner.png";
import Image from "next/image";
import image2 from "../../public/Rectangle 68.png";
import image3 from "../../public/Rectangle 70.png";
import image4 from "../../public/Rectangle 71.png";
import image5 from "../../public/Rectangle 69.png";
import image6 from "../../public/Rectangle 75.png";
import image7 from "../../public/Rectangle 74.png";
import image8 from "../../public/Rectangle 73.png";
import image9 from "../../public/Rectangle 72.png";
const Blog = () => {
  return (
    <div>
      <section className="pt-8 bg-bannerimg2 bg-no-repeat bg-cover bg-bottom sm:h-[316px] relative grid sm:flex items-center justify-center">
        <div className=" text-center">
          <div className="pl-6 sm:pl-13">
            <Image
              src={image1}
              alt="image"
              className="h-6 w-6 sm:h-[77px] sm:w-[77px]"
            />
          </div>
          <div>
            <p className=" font-poppins font-medium text-[20px] sm:text-[49px]">
              Blog
            </p>
          </div>
          <div className="flex sm:gap-0 ">
            <p className="text-[8px] sm:text-[14px] font-poppins font-medium">
              Home
            </p>
            <ChevronRight className="h-3 sm:h-6" />
            <p className="text-[8px] sm:text-[14px] font-poppins font-light">
              Blog
            </p>
          </div>
        </div>
      </section>

      {/*Main Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Post 1 */}
            <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
              <Image src={image2} alt="b" className="  object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                  <span className="mr-4">👤 Admin</span>
                  <span className="mr-4">📅 14 Oct 2022</span>
                  <span>🌳 Wood</span>
                </div>
                <h2 className="text-lg sm:text-3xl font-bold font-poppins mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
              <Image src={image3} alt="Post Image 2" className="object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                  <span className="mr-4">👤 Admin</span>
                  <span className="mr-4">📅 14 Oct 2022</span>
                  <span>🖌️ Handmade</span>
                </div>
                <h2 className="text-lg sm:text-3xl font-bold mb-4">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <Image src={image4} alt="Post Image 3" className="object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                  <span className="mr-4">👤 Admin</span>
                  <span className="mr-4">📅 14 Oct 2022</span>
                  <span>🌳 Wood</span>
                </div>
                <h2 className="text-lg sm:text-3xl font-bold mb-4">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </div>

            {/* Pagination */}
            <div className="pt-2 flex justify-center items-center  gap-2">
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
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">Categories</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-[#9F9F9F]  hover:underline">
                    Crafts (2)
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-[#9F9F9F] font-normal  hover:underline"
                  >
                    Design (8)
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-[#9F9F9F]  hover:underline">
                    Handmade (7)
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-[#9F9F9F]  hover:underline">
                    Interior (1)
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-[#9F9F9F]  hover:underline">
                    Wood (6)
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul>
                <li className="mb-4 flex gap-1">
                  <Image src={image6} alt="image" />
                  <a href="#" className="font-normal hover:underline">
                    Going all-in with millennial design
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </a>
                </li>
                <li className="mb-4 flex gap-1">
                  <Image src={image7} alt="image" />
                  <a href="#" className="font-normal hover:underline">
                    Exploring new ways of decorating
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </a>
                </li>
                <li className="mb-4 flex gap-1">
                  <Image src={image8} alt="" />
                  <a href="#" className="font-normal hover:underline">
                    Handmade pieces that took time to make
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </a>
                </li>
                <li className="mb-4 flex gap-1">
                  <Image src={image9} alt="image" />
                  <a href="#" className="font-normal hover:underline">
                    Modern home in Milan
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </a>
                </li>
                <li className="flex gap-1">
                  <Image src={image5} alt="image" />
                  <a href="#" className="font-normal hover:underline">
                    Colorful office redesign
                    <p className="text-gray-500 text-sm">03 Aug 2022</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
