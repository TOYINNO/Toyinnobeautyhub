"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdSwitchAccount } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "../../type";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

function PageButton() {
  const { productData } = useSelector(
    (state: StateProps) => state.toyinnobeautyhub
  );
  const { data: session } = useSession();
  return (
    <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
      <button
        onClick={() =>
          !session?.user ? signIn() : toast.error("You are signed in")
        }
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer"
      >
        <div className="flex justify-center items-center">
          {session?.user ? (
            <Image
              src={session?.user?.image!}
              alt="user image"
              width={35}
              height={35}
              className="rounded-full -translate-x-12 group-hover:translate-x-3 transition-transform duration-200"
            />
          ) : (
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          )}

          <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className="text-xs font-semibold">Profile</p>
      </button>
      <Link
        href={"/cart"}
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
      >
        <div className="flex justify-center items-center">
          <FaShoppingCart className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <FaShoppingCart className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className="text-xs font-semibold">Buy Now</p>
        <p
          className="absolute top-1 right-2 bg-primeColor text-white text-sm w-4 h-4 rounded-full items-center font-semibold
        "
        >
          {productData ? productData?.length : 0}
        </p>
      </Link>
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
}

export default PageButton;
