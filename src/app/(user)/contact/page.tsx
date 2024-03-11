import Image from "next/image";
import React from "react";
import flower from "@/assets/aloewoman.png";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

function Contactpage() {
  return (
    <div>
      <Image
        src={flower}
        alt="flower on lady"
        width={1400}
        height={100}
        className="object-cover "
      />
      <h1 className="mb-1 text-4xl font-bold text-center text-purple-800 py-20 justify-between">
        Contact Us
      </h1>
      <div className="text-primeColor text-center font-medium px-10">
        <p>
          Welcome to the Toyinno BeautyHub contact page! We are delighted to
          connect with you. Whether you have a question about our products, need
          assistance with an order, or simply want to share your feedback, our
          dedicated team is here to help. At Toyinno BeautyHub, we value each
          and every customer interaction. Your satisfaction is our top priority,
          and we are committed to providing exceptional service every step of
          the way. Feel free to reach out to us using the contact form below,
          and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="flex flex-row gap-20 mt-5 py-20 px-2 justify-center items-center">
        <div className="flex gap-8">
          <FiPhone className="text-purple-800 size-10" />
          <div className=" text-primeColor items-center">
            <h2 className="text-2xl font-semibold mb-5">Phone</h2>
            <p className="font-medium">+234 8169597180</p>
            {/* <p className="font-medium">+234 9028094394</p> */}
          </div>
        </div>
        <div className="flex gap-8">
          <CiLocationOn className="text-purple-800 size-12 font-extrabold" />
          <div className=" text-primeColor">
            <h2 className="text-2xl font-semibold mb-5">Address</h2>
            <p className="mb-2 font-medium">
              32 Emily Akinola Street, Akoka, Yaba-Lagos, Nigeria.
            </p>
            <p className="mb-2 font-medium"> </p>
          </div>
        </div>
        <div className="flex gap-8">
          <TfiEmail className="text-purple-800 size-10 font-extrabold" />
          <div className=" text-primeColor">
            <h2 className="text-2xl font-semibold mb-5">Email</h2>
            <p className="mb-2 font-medium">toyinnomons@gmail.com</p>
            <p className="mb-2 font-medium"> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
