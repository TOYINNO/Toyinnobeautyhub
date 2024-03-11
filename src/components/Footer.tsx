import React from "react";
import Container from "./Container";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-no-background.png";

const Footer = () => {
  return (
    <Container className="bg-white dark:bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-0 md:mb-0">
            <Link href={"/"}>
              <Image
                className="mb-4"
                src={logo}
                alt="logo"
                width={300}
                height={200}
              />
            </Link>
            <p className="w-auto text-black font-semibold mb-4">
              At Toyinno BeautyHub, we Curate diverse{" "}
              <p>skincare, haircare, fragrance for our community needs.</p>
            </p>

            {/* Contact info */}
            <div className="mb-4">
              <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Contact Info
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  32 Emily Akinola Street, Akoka, Yaba-Lagos, Nigeria.
                </li>
                <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
                  Phone/Email
                </h2>
                <li className="mb-4">+234 8169597180 </li>
                <li className="mb-4">toyinnomons@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Company */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Company
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/shop" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/pages" className="hover:underline">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow us */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Follow us
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <Link href="https://github.com" className="hover:underline ">
                    Github
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://discord.com" className="hover:underline">
                    Discord
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://twitter.com" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://facebook.com" className="hover:underline">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Legal
              </h2>
              <ul className="text-black dark:text-black font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Shipping and Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-white lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Copyright */}
          <div className="w-full">
            <div className="max-w-container mx-auto group space-y-6">
              <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-leftText duration-200 text-sm text-black">
                <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
                  <AiOutlineCopyright />
                </span>
                Copyright 2024 | toyinno beautyhub | All Rights Reserved
              </p>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <Link
                  href="#"
                  className="text-black hover:text-black dark:hover:text-white"
                >
                  <AiOutlineFacebook className="w-8 h-6" />
                  <span className="sr-only">Facebook page</span>
                </Link>
                <Link
                  href="#"
                  className="text-black hover:text-black dark:hover:text-white ms-5"
                >
                  <AiOutlineTwitter className="w-8 h-6" />
                  <span className="sr-only">Twitter page</span>
                </Link>
                <Link
                  href="#"
                  className="text-black hover:text-black dark:hover:text-white ms-5"
                >
                  <FaDiscord className="w-7 h-5" />
                  <span className="sr-only">Discord community</span>
                </Link>
                <Link
                  href="#"
                  className="text-black hover:text-black dark:hover:text-white ms-5"
                >
                  <AiOutlineGithub className="w-8 h-6" />
                  <span className="sr-only">GitHub account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
