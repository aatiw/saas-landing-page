"use client"

import Image from "next/image";
import { useState } from "react";
import logo from '../assets/images/logo.svg'

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 w-[90vw] h-[70px] bg-transparent border-3 border-gray-500 rounded-4xl mt-3 p-4">
      <div className="flex items-center justify-between h-full w-full">
        <div className="flex flex-row items-center justify-between cursor-pointer">
          <Image src={logo} alt="logo" height={130} width={140} />
        </div>

        <div className="hidden lg:flex flex-row items-center justify-between gap-16">
          <div className="flex flex-row items-center justify-between space-x-6 text-white">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#A6E43C]">
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

        <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
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
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-green-400"
              >
                {link.label}
              </a>
            ))}
            <button className="text-white border border-white rounded-2xl px-4 py-1">
              Log In
            </button>
            <button className="text-gray-900 border border-white rounded-2xl bg-green-500 px-4 py-1">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
