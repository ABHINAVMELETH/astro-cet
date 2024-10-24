import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
// import Button from "./Button"; // Keep this commented out or remove it if it's unnecessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0 z-30">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <p>Team</p>
                </Link>
              </li>
              <li>
                <Link href="#contactus">
                  <p>Contact us</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`${
              isOpen ? "max-h-60" : "max-h-0"
            } overflow-hidden transition-max-height duration-300 ease-in-out md:hidden`}
          >
            <ul className="flex flex-col gap-y-4 text-white py-4">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <p>Events</p>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <p>Team</p>
                </Link>
              </li>
              <li>
                <Link href="#contactus">
                  <p>Contact us</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
