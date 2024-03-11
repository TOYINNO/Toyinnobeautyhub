"use client";
import toast, { Toaster } from "react-hot-toast";
import { ProductProps } from "../../type";
import Price from "./Price";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/beautyhubSlice";

interface Props {
  product: ProductProps;
}

const Productinfo = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{product?.title}</h2>
      <div className="flex items-center gap-4">
        <p className="text-lg font-normal text-gray-500 line-through">
          <Price amount={product?.rowprice} />
        </p>

        <Price amount={product?.price} className="text-lg font-bold" />

        <p className="text-sm">
          you saved{" "}
          <Price
            className="bg-green-700 text-white px-2 rounded-md"
            amount={product?.rowprice - product?.price}
          />{" "}
          from this item
        </p>
      </div>
      <p className="text-sm tracking-wide text-gray-600">
        {product?.description}
      </p>
      <p className="text-sm to-gray-500">Be the first to leave a review.</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
          toast.success(`${product?.title.substring(0, 12)}...added to cart`);
        }}
        className="w-full py-4 bg-[#702963] hover:bg-black duration-300 text-white text-lg rounded-md "
      >
        Add to Cart
      </button>
      <Toaster
        position="bottom-right"
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

export default Productinfo;
