import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
// import { GoHomeFill } from "react-icons/go";
import { HiOutlinePencilAlt } from "react-icons/hi";
// import { HiPencilAlt } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
// import { BsFillPersonFill } from "react-icons/bs";

const Nav = () => {
  // logic

  // view
  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        <li>
          <Link to="/" className="block p-6">
            {/* <img src="./images/icon-home.svg" alt="Home으로 가기" /> */}
            <GoHome size="28px"/>
            {/* <GoHomeFill size="28px"/> */}
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-6">
            {/* <img src="./images/icon-home.svg" alt="Home으로 가기" /> */}
            <HiOutlinePencilAlt size="28px"/>
            {/* <HiPencilAlt size="28px"/> */}
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-6">
            {/* <img src="./images/icon-home.svg" alt="Home으로 가기" /> */}
            <BsPerson size="28px"/>
            {/* <BsFillPersonFill size="28px"/> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
