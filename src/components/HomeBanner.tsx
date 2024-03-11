"use client";
import React from "react";
import bannerImg from "@/assets/Plain/sideimagebanner.jpg";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const HomeBanner = () => {
  return (
    <div className=" w-full bg-[#f7ece9]">
      <Container className="md:bg-transparent relative py-0 mb-1">
        <Image
          src={bannerImg}
          alt="banner img"
          className="w-full h-full object-cover hidden md:inline-block rounded-full"
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-20 left-10 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-5xl font-semibold text-purple-700 hidden md:block top-20">
            Discover Your Beauty with Toyinno BeautyHub
          </h1>
          <h2 className="text-[#311432] text-2xl font-medium max-w-[600px] hidden md:block">
            Elevating Beauty in Every Detail!
          </h2>
          <p className="text-[#311432] text-base font-normal mr-4 max-w-[600px] hidden md:block">
            One Pamper at a Time for Radiant Skin, Fragrance and Luxurious
            Haircare!
          </p>
          <Link
            href={"/shop"}
            className="bg-[#702963] text-center text-lg w-[150px] h-[60px] p-2 text-white items-center justify-center hover:bg-black duration:300 font-bold flex rounded-md hidden md:block"
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
