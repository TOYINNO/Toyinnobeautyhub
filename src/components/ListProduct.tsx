import React from "react";
import { ProductProps } from "../../type";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { addToCart } from "@/redux/beautyhubSlice";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  product: ProductProps;
  bg?: string;
}

const ListProduct = ({ product, bg }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full relative group border-[1px] flex items-center border-grey hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group ">
      <div className="max-w-80 max-h-80 flex ">
        <div
          className={`w-full h-80 flex items-center justify-center ${
            bg ? `bg-[${bg}]` : "bg-white"
          }`}
        >
          <Link href={{ pathname: `/product/${product?.slug?.current}` }}>
            <Image
              src={urlFor(product?.image).url()}
              alt="productimage"
              width={700}
              height={700}
              className="w-72 h-72 object-contain"
            />
          </Link>
          {product?.isnew && (
            <div className="absolute top-2 right-2 z-50">
              <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-purple-950 duration-300 cursor-pointer rounded-md">
                New
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-8 px-4">
        <div className="items-center justify-between">
          <h2 className="absolute top-20 text-medium text-primeColor font-bold text-lg">
            {product?.title.substring(0, 25)}
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-[#767676] text-xs line-through">
              ${product?.rowprice}
            </p>
            <p className="font-semibold">${product?.price}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineStarPurple500 className="text-lg text-yellow-500" />
          <span className="font-medium text-sm">{product?.ratings}</span>
        </div>

        <div className="flex gap-4 rounded-md absolute bottom-10">
          <button
            onClick={() => {
              dispatch(addToCart(product));
              toast.success(
                `${product?.title.substring(0, 12)}...added to cart`
              );
            }}
            className="bg-gray-800 text-purple-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-purple-950 hover:text-white duration-200"
          >
            <span>
              <AiOutlineShopping />
            </span>
            Add to bag
          </button>
          <Link
            href={`/product/${product?.slug?.current}`}
            className="bg-gray-800 text-purple-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-purple-950 hover:text-white duration-200"
          >
            <span>
              <BsArrowsFullscreen />
            </span>
            Quick view
          </Link>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#702963",
          },
        }}
      />
    </div>
  );
};

export default ListProduct;
