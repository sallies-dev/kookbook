import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    { url: "#", label: "About Us" },
    { url: "#", label: "Chat with Us" },
    { url: "#", label: "Blog" },
    { url: "#", label: "Privacy Policy" },
    { url: "#", label: "Terms of Use" },
  ];
  return (
    <main className="px-5 py-2 bg-gray-100 border-t border-gray-300 flex max-lg:flex-col max-lg:gap-3 items-center justify-between">
      <Link href={"/"} className="flex items-center gap-1 z-50">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={800}
          height={800}
          className="w-10 h-10"
        />
        <p className="font-bold text-xl text-black max-md:hidden">KookBook</p>
      </Link>

      <div className="flex max-lg:flex-col items-center gap-3 text-sm">
        {footerItems.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="hover:underline transition-all text-gray-700 hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 text-xl text-gray-700">
        <FaFacebook className="hover:text-black transition-all" />
        <FaXTwitter className="hover:text-black transition-all"/>
        <FaInstagram className="hover:text-black transition-all"/>
        <FaYoutube className="hover:text-black transition-all"/>
      </div>
    </main>
  );
};

export default Footer;
