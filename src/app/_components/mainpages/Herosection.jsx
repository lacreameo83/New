"use client";
// import React from 'react'
// import logo from "../../assets/logo.png";
import { LiaSearchSolid } from "react-icons/lia";
import Dropdown from "../reseable/Dropdown";
import logotypes from "../../../../public/Logotypes.png";
import Frame1 from "../../../../public/Frame1.png";
import Frame2 from "../../../../public/Frame2.png";
import Square1 from "../../../../public/Square1.png";
import Square2 from "../../../../public/Square2.png";
import Square3 from "../../../../public/Square3.png";
import Square4 from "../../../../public/Square4.png";
import Square5 from "../../../../public/Square5.png";
import Square6 from "../../../../public/Square6.png";
import Image from "next/image";
// import MainSection from "./MainSection";
// import OverLine from "./OverLine";
// import OverlLine2 from "./OverlLine2";
// import PopularAution from "./PopularAution";
// import CustomersFeedback from "./CustomersFeedback";
// import TripleSection from "./TripleSection";

function Herosection() {
  return (
    <div>
      <div
        style={{ marginTop: "50px", marginBottom: "60px" }}
        className="mt-[30px] h-fit relative flex-col gap-[20px] flex-center"
      >
        <p className="text-[rgba(119,128,161,1)] text-[15px] font-[500] inter leading-[18.15px] text-center ">
          Non Fungible Tokens
        </p>
        <div className=" h-[89px] hidden xl:block absolute left-[5%] top-[20%] w-[89px]">
          <Image src={Square1} alt="Square1" width={89} height={89} />
        </div>
        <div className=" h-[89px] hidden xl:block absolute left-[15%] top-[70%] w-[89px]">
          <Image src={Square2} alt="Square1" width={89} height={89} />
        </div>
        <div className=" h-[89px] hidden xl:block absolute left-0 bottom-8 w-[89px]">
          <Image src={Square3} alt="Square1" width={89} height={89} />
        </div>
        <div className=" h-[89px] hidden xl:block absolute right-[10%] top-[20%] w-[89px]">
          <Image src={Square4} alt="Square1" width={89} height={89} />
        </div>
        <div className=" h-[89px] hidden xl:block absolute right-[5%] top-[52%] w-[89px]">
          <Image src={Square5} alt="Square1" width={89} height={89} />
        </div>
        <div className=" h-[89px] hidden xl:block absolute right-[15%] bottom-[12%] w-[89px]">
          <Image src={Square6} alt="Square1" width={89} height={89} />
        </div>
        <div className=" h-fit ">
          <div className="flex items-center">
            <p className=" sm:text-[120px] font-[600] leading-[120px] text-center  ">
              A new NFT
            </p>
            {/* <img
              // style={{ marginLeft: "50px" }}
              className="w-[40px] h-[91px] relative left-[20px]  "
              src={Frame1}
              alt="logo"
            /> */}
            <Image src={Frame1} alt="logo" width={40} height={91} />
          </div>
          <div
            style={{ marginLeft: "0px" }}
            className="flex gap-[20px] items-center"
          >
            <Image src={Frame2} alt="logo" width={62} height={62} />
            {/* <img className="w-[62px] h-[62px]   " src={Frame2} alt="logo" /> */}
            <p className="sm:text-[120px] font-[600] leading-[120px] text-center  ">
              Experience
            </p>
          </div>
        </div>

        <p className="text-[rgba(119,128,161,1)] text-[24px] font-[400] inter leading-[36px] text-center ">
          Discover, collect and sell
        </p>

        <div
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
          className="bg-[rgba(255,255,255,1)] gap-[60px] flex flex-col sm:flex-row items-center justify-center h-[84px] rounded-[16px] "
        >
          <input
            className="w-[238px] h-[24px] text-[rgba(38,40,64,1)] font-[400] inter outline-none text-[16px] leading-[24px] "
            type="text"
            placeholder="Items, collections and creators"
          />
          <div className="flex items-center gap-[20px]">
            <p className="bg-[rgba(38,40,64,1)] h-[28px] w-[1px] "></p>
            <div className="w-[162px]">
              <Dropdown
                options={["Option 1", "Option 2", "Option 3", "Option 4"]}
                // placeholder="Category"
                // onSelect={handleSelect}
              />
            </div>
            <div className="w-[24px] h-[24px] text-[rgba(42,39,201,1)]">
              <LiaSearchSolid />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px" }} className="">
          
          <Image src={logotypes} alt="logotypes" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
