"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session, status } = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(session, status);


  const handleOpen = () => {
    setNavOpen(!navOpen);
  };

  // console.log(navOpen);

  const navItems = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About Us" },
    { url: "/faq", label: "FAQs" },
    { url: "/recipes", label: "Recipes" },
  ];


  return (
    <nav className="flex items-center justify-between shadow-md py-3 px-6 relative z-50">
      <Link href={"/"} className="flex items-center gap-1 z-50">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={800}
          height={800}
          className="w-10 h-10"
        />
        <p className="font-bold text-xl text-gray-700 max-md:hidden">
          KookBook
        </p>
      </Link>

      <div className="flex items-center gap-8 ml-auto max-lg:hidden">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="text-lg hover:text-blue-600 transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {!session?.user ? (
        <Link
          href={"/auth/signin"}
          className="flex items-center gap-1 text-lg lg:border px-3 py-1 hover:text-blue-600 hover:border-blue-600 transition-colors duration-300 ml-8 max-lg:ml-auto z-50"
        >
          <FiUser />
          <p className="max-lg:hidden">Sign In</p>
        </Link>
      ) : (
        <div className="max-lg:ml-auto z-50">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src={session?.user?.image}
              alt={session?.user?.name.slice(0, 1).toUpperCase()}
              className="w-10 h-10 rounded-full ml-8 max-lg:ml-auto z-50"
            />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href={"/profile"}>My Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href={"/add-recipe"}>Add Recipe</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <button onClick={() => signOut()}>Sign Out</button>
            </MenuItem>
          </Menu>
        </div>
      )}
    
        
      {/* mobile and tab view */}
      {navOpen ? (
        <div className="h-dvh w-full overflow-hidden lg:hidden absolute top-0 right-0 bg-white flex flex-col items-center justify-center gap-20">
          {navItems.map((item, i) => (
            <Link
              key={i}
              onClick={()=> setNavOpen(false)}
              href={item.url}
              className="text-lg hover:text-blue-600 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}

      <div className="lg:hidden z-50 mt-1 max-lg:ml-2">
        <button onClick={handleOpen} className="text-2xl">
          {navOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
