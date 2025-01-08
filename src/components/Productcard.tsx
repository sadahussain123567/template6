import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  bgcolor: string;
  percent: string;
  imageSrc: string | StaticImageData; // Accept both string and imported image types
  altText: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  percent,
  bgcolor,
  imageSrc,
  altText,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div className="relative group">
      <div
        className={`absolute top-3 left-3 ${bgcolor} text-white text-sm font-bold py-1 px-2 rounded-full`}
      >
        {percent}
      </div>
      <Image
        src={imageSrc} // Works with both string and imported image
        alt={altText}
        width={300} // Set appropriate dimensions
        height={200}
        className="w-full h-auto"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="bg-white text-black font-medium py-2 px-4 rounded shadow-lg"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
        <div className="flex space-x-4 mt-4 text-white">
          <button className="hover:text-gray-300">Share</button>
          <button className="hover:text-gray-300">Compare</button>
          <button className="hover:text-gray-300">Like</button>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-lg sm:text-2xl">{title}</h4>
        <p>{description}</p>
        <h4 className="font-semibold text-lg sm:text-2xl">{price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
