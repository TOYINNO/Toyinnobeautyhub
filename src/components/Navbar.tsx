"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import logo from "@/assets/logo-no-background.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { createClient } from "next-sanity";

interface Product {
  _id: string;
  slug: {
    current: string;
  };
  title: string;
  // Add more fields if necessary
}
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
});

function PagesDropdown({ closeDropdown }: { closeDropdown: () => void }) {
  const handleDropdownClick = () => {
    closeDropdown(); // Close dropdown when a dropdown link is clicked
  };
  return (
    <div className="absolute z-10 right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700">
      <ul className="py-2 text-sm text-black font-semibold">
        {" "}
        {/* Set text color to text-purple-800 */}
        <li>
          <Link
            href="/about"
            onClick={handleDropdownClick}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Link
              href="/contact"
              onClick={handleDropdownClick} // Close dropdown on click
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <Link
              onClick={handleDropdownClick}
              href="/privacy"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <Link
              href="/terms"
              onClick={handleDropdownClick}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Terms and Conditions
            </Link>
          </Link>
        </li>
        <li>
          <Link href="/faqs">
            <Link
              href="/faqs"
              onClick={handleDropdownClick}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              FAQs
            </Link>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchResultsVisible, setSearchResultsVisible] =
    useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false); // State to control mobile menu visibility

  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Pages",
      link: "#",
      hasDropdown: true,
    },
    // {
    //   title: "Blog",
    //   link: "/blog",
    // },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Studio",
      link: "/studio",
    },
  ];
  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu); // Toggle mobile menu visibility
  };

  // Function to perform search query

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    useCdn: true,
  });
  // Replace lines 142-155 with:
  const search = useCallback(async () => {
    if (!searchQuery.trim()) return;

    try {
      const query = `*[_type == 'product' && title match "${searchQuery}*"]`;
      const results = await client.fetch<Product[]>(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, [searchQuery, client]); // Add client to the dependency array
  // useEffect hook to trigger search when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim()) {
      search();
    }
  }, [searchQuery, search]);

  useEffect(() => {
    // Close dropdown when search results are displayed
    setShowDropdown(false);
  }, [searchResults]);

  const closeDropdown = () => {
    setShowDropdown(false);
  };
  useEffect(() => {
    // Close dropdown when search results are displayed
    setShowDropdown(false);
  }, [searchResults.length]);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-purple-100 sticky top-0 z-50">
      <nav className="h-full max-w-screen-xl max-auto px-4 xl:px-0 flex items-center justify-around gap-1 relative">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-60 flex-1" />
        </Link>
        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item) => (
            <div key={item?.link} className="relative">
              <Link
                href={item?.link}
                className={`group flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-black hover:underline underline-offset-4 decoration-[1px] group-hover:text-purple-300 duration-200 ${
                  pathname === item?.link && "text-purple-400 underline"
                }`}
                onClick={() =>
                  setShowDropdown(
                    item?.hasDropdown ? !showDropdown : showDropdown
                  )
                }
              >
                <p className="flex cursor-pointer items-center gap-2 ">
                  {item?.title}
                  {item?.hasDropdown && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
              </Link>
              {item?.hasDropdown && showDropdown && (
                <PagesDropdown closeDropdown={closeDropdown} />
              )}
            </div>
          ))}
          {session?.user && (
            <button
              onClick={() => signOut()}
              className="flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 md:border-r-[2px] border-r-gray-200 duration-200 last:border-r-0"
            >
              Logout
            </button>
          )}
        </div>
        <div className="relative hidden lg:inline-flex lg w-[600px] h-10 text-base text-primeColor border-[1px] border-gray-400 items-center gap-2 justify-between px-6 rounded-md">
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder: text-gray-700"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQuery("")}
              className="w-5 h-5 hover:cursor-pointer "
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <HiMenu
          className="inline-flex md:hidden cursor-pointer w-8 h-6"
          onClick={handleMobileMenuClick}
        />
      </nav>
      {/* Display mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white absolute top-20 inset-x-0 z-50">
          <ul className="flex flex-col gap-2 p-4 w-2">
            {navBarList.map((item) => (
              <li key={item?.link}>
                <Link href={item?.link} className="text-primeColor">
                  <Link href={item?.link}>{item?.title}</Link>
                </Link>
              </li>
            ))}
            {session?.user && (
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      )}
      {/* Display search results */}
      {searchResults.length != 0 && (
        <div className="bg-gray-200 p-4">
          <h2 className="text-xl font-bold">Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <Link href={`/product/${result.slug.current}`}>
                  <Link
                    href={`/product/${result.slug.current}`}
                    className="text-primeColor"
                  >
                    {result.title}
                  </Link>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
