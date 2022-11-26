import React from "react";
import { Link } from "react-router-dom";
import Cooliologo from "../img/coolio.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function NavBar() {
  const name = "Pythonk";
  const navs = [
    {
      id: 1,
      title: "About Us",
      style: "hover:text-amber-600 hover:scale-105 hover:duration-200",
    },
    {
      id: 2,
      title: "Services",
      style: "hover:text-amber-600 hover:scale-105 hover:duration-200",
    },
    {
      id: 3,
      title: "Make a Reservation",
      style: "hover:text-amber-600 hover:scale-105 hover:duration-200",
    },
  ];
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-2 border-[#e8b024] bg-black px-10 text-white">
      <div className="w-[30%]">
        <Link to="/">
          <img
            src={Cooliologo}
            alt="Coolio App Logo"
            className="w-16 object-cover "
          />
        </Link>
      </div>
      <div className="h-full w-[40%]">
        <ul className="hidden h-full flex-row items-center justify-start md:flex">
          {navs.map((navs) => (
            <li className={`px-2 capitalize ${navs.style}`}>{navs.title}</li>
          ))}
        </ul>
      </div>
      <div className="flex w-[10%] items-center justify-between">
        <div>
          <FaShoppingCart />
        </div>
        <div className="mr-20 flex items-center justify-between p-6">
          <FaUser />
          <span className="ml-1 items-center text-[#e8b024]">{name}</span>
        </div>
      </div>
    </div>
  );
}
