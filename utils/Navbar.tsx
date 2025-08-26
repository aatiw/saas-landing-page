"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../assets/images/logo.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => (!prev))
  }

  return (
    <div className="fixed top-0 w-[90vw] h-auto bg-neutral-950/80 border-3 border-gray-500 rounded-4xl mt-3 p-4 z-50">
      <div className="flex items-start lg:items-center justify-between h-full w-full">
        <div className="flex flex-row items-center justify-between cursor-pointer">
          <Image src={logo} alt="logo" height={130} width={140} />
        </div>

        <div className="hidden lg:flex flex-row items-center justify-between gap-16">
          <div className="flex flex-row items-center justify-between space-x-6 text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#A6E43C]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-row items-center justify-between space-x-3">
            <button className="text-white border border-white rounded-4xl bg-transparent cursor-pointer w-24 h-10 hover:bg-[#A6E43C] hover:text-[#080808]">
              Log In
            </button>
            <button className="text-[#080808] border border-white rounded-4xl bg-[#A6E43C] hover:bg-transparent hover:text-white cursor-pointer w-24 h-10">
              Sign Up
            </button>
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-start">
          <button
            className="lg:hidden text-white self-end"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="lg:hidden mt-4 flex flex-col items-end space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-green-400"
                >
                  {link.label}
                </a>
              ))}
              <button className="text-white border border-white rounded-2xl px-4 py-1 hover:bg-[#A6E43C] hover:text-[#080808]">
                Log In
              </button>
              <button className="text-gray-900 border border-white rounded-2xl bg-[#A6E43C] px-4 py-1 hover:bg-transparent hover:text-white">
                Sign Up
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
