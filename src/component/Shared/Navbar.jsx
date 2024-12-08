import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const navItem = [
    {
      title: "Home",
      Path: "/",
    },
    {
      title: "About",
      Path: "/about",
    },
    {
      title: "Services",
      Path: "/services",
    },
    {
      title: "Blog",
      Path: "/blog",
    },
    {
      title: "Contact",
      Path: "/contact",
    },
  ];

  return (
    <div className="bg-base-100">
      <div>
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItem.map((item) => (
                  <li key={item.Path}>
                    <Link href={item.Path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={"/"}>
              <Image
                alt="logo"
                src="/assets/logo.png"
                height={110}
                width={160}
              />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-{22} font-semibold">
              {navItem.map((item) => (
                <li key={item.Path}>
                  <Link className="hover:text-primary duration-500" href={item.Path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            <IoCartOutline className="h-8 w-8 " />
            <BsSearch className="h-6 w-6 mx-6" />
            <a className="text-{22} btn btn-outline border-primary text-primary hover:bg-primary hover:text-white hover:border-primary">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
