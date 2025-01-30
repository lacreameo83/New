import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Button from "../reseable/Button";
import Blackbutton from "../reseable/Blackbutton";
import Link from "next/link";

function NavBar() {
  return (
    <div className="h-[117px] w-full flex-center ">
      <div
        // style={{ paddingLeft: "20px", paddingRight: "20px" }}
        className="max-w-[1392px] w-[90%] md:w-[90%]   2xl:w-[100%]  flex items-center justify-between"
      >
        <div className="h-[34px] w-[34px] ">
          <Link href="/">
            <Image src={logo} alt="logo" height={34} width={34} />
          </Link>
        </div>

        <div className=" ">
          <ul className="hidden sm:flex    text-[rgba(119,128,161,1)] font-[600] cursor-pointer transition-all easy-in text-[16px] leading-[20.16px]  items-center gap-[24px]  ">
            <li className="hover:text-[rgb(207, 207, 234)] ">Auctions</li>
            <li className="hover:text-[rgb(207, 207, 234)] ">Roadmap</li>
            <li className="hover:text-[rgb(207, 207, 234)] ">Discover</li>
            <Link href="/detailpage">
              <li className="hover:text-[rgb(207, 207, 234)] ">Community</li>
            </Link>
          </ul>
        </div>

        <div className="hidden sm:flex  items-center gap-[16px]">
          <Blackbutton text="Contact" />

          <Button text=" My account" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
