import Link from "next/link";
import Image from "next/image";
import image from "../../public/image 100.png";
import image2 from "../../public/image 101.png";
import image3 from "../../public/image 106.png";
import image4 from "../../public/image 1.png";
import image5 from "../../public/image 2.png";
import image6 from "../../public/image 3.png";
import image7 from "../../public/image 4.png";
import image8 from "../../public/Image 5.png";
import image9 from "../../public/image 6.png";
import image10 from "../../public/image 7.png";
import image11 from "../../public/image 8.png";
import image12 from "../../public/Rectangle 24.png";
import image13 from "../../public/Rectangle 25.png";
import image15 from "../../public/Rectangle 37.png";
import image16 from "../../public/Rectangle 38.png";
import image17 from "../../public/Rectangle 39.png";
import image18 from "../../public/Rectangle 40.png";
import image19 from "../../public/Rectangle 41.png";
import image20 from "../../public/Rectangle 43.png";
import image21 from "../../public/Rectangle 44.png";
import image22 from "../../public/Rectangle 45.png";
export default function Hero() {
  return (
    <div>
      <section className="pt-20 bg-bannerimg bg-no-repeat bg-cover bg-bottom h-[600px] sm:h-[812.53px] relative">
        <div className="absolute top-[25%] left-[65%] sm:left-[75%] transform -translate-x-1/2 w-[280px] h-[180px]  sm:w-[643px] sm:h-[443px] bg-[#FFF3E3] rounded-sm shadow-lg p-2 sm:p-8">
          <div className="pt-1   sm:pt-4 pb-1 ">
            <p className="text-[10px] sm:text-[16px] font-popins uppercase font-semibold text-[#333333] mb-1 sm:mb-4">
              New Arrival
            </p>
            <h1 className="text-lg sm:text-[52px] font-popins font-bold text-[#B88E2F] leading-tight mb-1 sm:mb-6">
              Discover Our <br /> New Collection
            </h1>
            <p className=" text-[10px] sm:text-sm text-black mb-1 sm:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            <a
              href="#"
              className=" flex justify-center items-center text-sm sm:text-xl w-[150px] h-[35px] sm:w-[176px] sm:h-[48px]  px-1 py-5 sm:px-3 sm:py-3 bg-[#B88E2F] text-white font-semibold  hover:bg-[#9a7c28] transition duration-300"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>

      <div className="text-center pt-3 pb-4 sm:pt-7 sm:pb-7">
        <h3 className="text-xl sm:text-[32px] fo-nt-popins font-semibold">
          Browse The Range
        </h3>
        <br />
        <p className="text-xs sm:text-[20px] text-balance">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur!
        </p>
        <br />
        <div className="grid place-items-center sm:justify-center sm:items-center sm:flex">
          <div>
            <Image src={image} alt="image" className="w-[381px] h-[480px]" />
            <br />
            <p>Dining</p>
          </div>
          <div>
            {" "}
            <Image src={image2} alt="image" className="w-[381px] h-[480px]" />
            <br />
            <p>Living</p>
          </div>
          <div>
            <Image src={image3} alt="image" className="w-[381px] h-[480px]" />
            <br />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg  sm:text-[40px] text-center font-popins font-bold ">
          Our Product{" "}
        </h3>
        <br />
        <div className=" sm:flex sm:pb-14 sm:gap-2 grid grid-cols-2  place-content-center pb-7 gap-1">
          <div className="relative group">
            <Image src={image4} alt="image" className="w-full h-auto" />

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
              <h4 className="font-semibold text-lg sm:text-2xl">
                Rp 2.500.000
              </h4>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              New
            </div>
            <Image src={image5} alt="image" className="w-full h-auto" />

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
              <h4 className="font-semibold text-lg sm:text-2xl">
                Rp 2.500.000
              </h4>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              -50%
            </div>
            <Image src={image6} alt="image" className="w-full h-auto" />

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
              <h4 className="font-semibold text-lg sm:text-2xl">
                Rp 7.000.000
              </h4>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              New
            </div>
            <Image src={image7} alt="image" className="w-full h-auto" />

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
        <div className="sm:pb-14 sm:gap-2 grid place-content-center sm:flex  pb-7 gap-1">
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              New
            </div>
            <Image src={image8} alt="image" className="w-full h-auto" />

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
              <h4 className="font-semibold text-lg sm:text-2xl">Grifo</h4>
              <p>Night lamp</p>
              <h4 className="font-semibold text-lg sm:text-2xl">
                Rp 1.500.000
              </h4>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              New
            </div>
            <Image src={image9} alt="image" className="w-full h-auto" />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg">
                <Link href="/shop">Add to cart</Link>
              </button>
              <div className="flex space-x-4 mt-4 text-white">
                <button className="hover:text-gray-300">Share</button>
                <button className="hover:text-gray-300">Compare</button>
                <button className="hover:text-gray-300">Like</button>
              </div>
            </div>

            <div className="mt-4 text-">
              <h4 className="font-semibold text-lg sm:text-2xl">Muggo</h4>
              <p>Small mug</p>
              <h4 className="font-semibold text-lg sm:text-2xl">Rp 150.000</h4>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              New
            </div>
            <Image src={image10} alt="image" className="w-full h-auto" />

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
              <h4 className="font-semibold text-lg sm:text-2xl">Pingky</h4>
              <p>Oute bed set</p>
              <h4 className="font-semibold text-lg sm:text-2xl">
                Rp 7.000.000
              </h4>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute top-3 left-3 bg-green-500 text-white text-sm font-bold py-1 px-2 rounded-full">
              New
            </div>
            <Image src={image11} alt="image" className="w-full h-auto" />

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
              <h4 className="font-semibold text-lg sm:text-2xl">Potty</h4>
              <p>Minimalist Flower Pot</p>
              <h4 className="font-semibold text-lg sm:text-2xl">Rp 500.000</h4>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <button className="align-middle py-1 px-1  sm:px-24 sm:py-3 border border-yellow-500 text-yellow-700 font-semibold text-base sm:text-xl rounded hover:bg-yellow-100">
            Show More
          </button>
        </div>
      </div>
      <div className=" sm:flex flex-row  sm:pt-16 pt-5 pb-5 sm:pb-14">
        <div className="grid  text-center place-content-center sm:text-start pr-11 ">
          <p className="text[16px] sm:text-[40px] text-[#3A3A3A] font-semibold sm:font-extrabold mb:1 sm:mb-4 ">
            50+ Beautiful rooms <br />
            inspiration
          </p>
          <p className="text-xs   sm:text-s mb-1 sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <a
            href="#"
            className=" flex justify-center items-center text-sm sm:text-xl w-[150px] h-[35px] sm:w-[176px] sm:h-[48px]  px-1 py-5 sm:px-3 sm:py-3 bg-[#B88E2F] text-white font-semibold  hover:bg-[#9a7c28] transition duration-300"
          >
            Explore Now
          </a>
        </div>
        <div>
          <Image src={image12} alt="image" className="pt-3" />
        </div>
        <div>
          <Image src={image13} alt="image" />
        </div>
      </div>

      <div>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Share your setup with{" "}
              <span className="text-gray-700">#FuniroFurniture</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="col-span-1">
                <Image
                  src={image16}
                  alt="Furniture 1"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image18}
                  alt="Furniture 2"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image20}
                  alt="Furniture 3"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image22}
                  alt="Furniture 4"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image15}
                  alt="Furniture 5"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image17}
                  alt="Furniture 6"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image19}
                  alt="Furniture 7"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="col-span-1">
                <Image
                  src={image21}
                  alt="Furniture 8"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
