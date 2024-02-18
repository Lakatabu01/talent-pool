"use client";
import Link from "next/link";
import DefaultButton from "./default_button";
import { TransparentButton } from "./default_button";
import { useState } from "react";

const Header = () => {
  const [dropped, setDropped] = useState<boolean>(false);

  const menuDisplay = () => {
    setDropped(!dropped);
  };

  return (
    <header
      className={`bg-[#fff]  w-full z-50 fixed flex flex-col lg:flex-row lg:justify-center py-8 ${
        dropped == true ? "animate-drop shadow-2xl" : ""
      } `}>
      <div className="flex justify-between w-[89%] mx-auto items-center lg:w-[90%]">
        <Link href="/">
          {" "}
          <div className="bg-[#747474] w-16 h-6 rounded"></div>
        </Link>
        <nav className="lg:flex text-base list-none hidden w-[60%]  justify-between">
          <li className="px-2">Join talent pool</li>
          <li className="px-2">Hire a talent</li>
          <li className="px-2">Discover solutions</li>
          <li className="px-2">
            {" "}
            <Link href="/about">About</Link>{" "}
          </li>
          <li className="px-2">
            <Link href="/contact">Contact</Link>
          </li>
        </nav>

        <div className="hidden lg:block">
          <DefaultButton buttonName="Get started" />
        </div>
        <div className="lg:flex hidden">
          <p>Login</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 pl-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <button
          className="lg:hidden border-none bg-transparent"
          onClick={menuDisplay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none">
            <path
              d="M1.66675 14.6667H12.3334M1.66675 8.00001H20.3334M9.66675 1.33334H20.3334"
              stroke="#2F2F8C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={` w-full px-4 mt-5 ${dropped == true ? "block" : "hidden"}`}>
        <div className="w-full text-[#484747]">
          <div className="flex flex-col my-6">
            <h4 className="text-base text-[#2C2B2B] font-semibold">Features</h4>
            <p className="my-3 text-sm">Join Talent Pool</p>
            <p className="text-sm">Hire Talents</p>
          </div>

          <div className="flex flex-col my-6">
            <h4 className="text-base text-[#2C2B2B] font-semibold">Company</h4>
            <p className="my-3 text-sm">
              <Link href="/about" onClick={menuDisplay}>
                About
              </Link>
            </p>
            <p className="text-sm">
              <Link href="/contact" onClick={menuDisplay}>
                Contact us
              </Link>
            </p>
          </div>

          <div className="">
            <h4 className="text-base text-[#2C2B2B] font-semibold">
              Our Solutions
            </h4>
            <p className="my-3 text-sm">Brand & product design</p>
            <p className="text-sm">Data Science & Analytics</p>
            <p className="my-3 text-sm">Application Development</p>
            <p className="text-sm">Project Management</p>
          </div>
        </div>

        <div className="flex justify-center mt-10 w-full">
          <div>
            <DefaultButton buttonName="Get started" />
            <TransparentButton btnName="Login" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
