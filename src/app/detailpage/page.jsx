import React from 'react'
import PopularAution from '../_components/mainpages/PopularAution'
import Image from 'next/image'
import unsplash from "../../../public/unsplash_rlbG0p_nQOU.png";
import Arrow from "../../../public/Arrow Slide.png";
import Button from '../_components/reseable/Button';
import Avatar1 from "../../../public/Avatar1.png";
import Avatar2 from "../../../public/Avatar2.png";

import LineChart from '../_components/reseable/Charts';

import { FaHeart } from "react-icons/fa6";
import { PiBookLight } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";

function page() {
  return (
    <div className="w-full flex-col flex-center">
      <div className="max-w-[1392px] grid gap-11 grid-cols-1 sm:grid-cols-2 border-[1px] p-[20px] rounded-[40px] relative  border-[rgba(38,40,64,1)]   ">
        <div className="absolute right-[-2.5%] top-16 h-[200px] flex flex-col justify-between  w-[56px] ">
          <div className="h-[56px] border-[rgba(38,40,64,1)] text-rose-700 border-[1px] rounded-full flex-center w-[56px] ">
            <FaHeart />
          </div>
          <div className="h-[56px] border-[rgba(38,40,64,1)] border-[1px] rounded-full flex-center w-[56px] ">
            <PiBookLight />
          </div>
          <div className="h-[56px] border-[rgba(38,40,64,1)] border-[1px] rounded-full flex-center w-[56px] ">
            <IoShareSocial />
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${unsplash.src})` }}
          className="h-[858px] max-w-[684px] w-[90%] rounded-[20px] bg-cover bg-no-repeat bg-current relative "
        >
          <div className="w-[80px] h-[80px]  absolute bottom-8 left-[45%] ">
            <Image src={Arrow} alt="Arrow" width={80} height={80} />
          </div>
        </div>

        <div className="h-full flex flex-col xl:w-[495px] items-center justify-around ">
          <div className="h-[227px] flex flex-col justify-between ">
            <p className="font-[600] text-[40px] leading-[50px] ">
              Dui accumsan leo vestibulum ornare
            </p>
            <p className="inter text-[16px] w-[400px] leading-[24px] text-[rgba(119,128,161,1)]">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
            <div className="flex items-center gap-11 ">
              <div className="flex items-center gap-[17px]">
                <div
                  style={{ backgroundImage: `url(${Avatar1.src})` }}
                  className="h-[40px] w-[40px] bg-cover bg-no-repeat bg-center  rounded-full  "
                >
                    
                </div>
                <div>
                  <p className="inter text-[14px] leading-[21px] text-[rgba(119,128,161,1)]">
                    Creator
                  </p>
                  <p className=" text-[13px] leading-[16.33px] ">@brook_sim</p>
                </div>
              </div>

              <div className="flex items-center gap-[17px]">
                <div
                  style={{ backgroundImage: `url(${Avatar2.src})` }}
                  className="h-[40px] w-[40px] bg-cover bg-no-repeat bg-center  rounded-full  "
                ></div>
                <div>
                  <p className="inter text-[14px] leading-[21px] text-[rgba(119,128,161,1)]">
                    Collection
                  </p>
                  <p className=" text-[13px] leading-[16.33px] ">Afterlife</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid  border-[1px] p-[20px]  border-[rgba(38,40,64,1)] w-[400px] xl:w-full rounded-[20px] grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-around ">
              <p className="inter text-[14px] leading-[21px] text-[rgba(119,128,161,1)]">
                Current price
              </p>
              <p className=" text-[56px] font-[600] leading-[56px] ">
                5.25 <span className="text-[24px] leading-[24px] ">ETH</span>{" "}
              </p>
            </div>
            <div className="h-[235px] rounded-[20px] flex flex-col  justify-around ">
              <p className="inter text-[14px] leading-[21px] text-[rgba(119,128,161,1)]">
                Time left
              </p>
              <p className=" text-[24px] font-[600] leading-[24px] ">
                22:59 min
              </p>
              <p className="inter text-[14px] leading-[21px] text-[rgba(119,128,161,1)]">
                (01.01.2022 - 01:40:47)
              </p>
            </div>
            <Button width={"xl:w-[415px]"} text="Place a bid" />
          </div>

          <LineChart />
        </div>
      </div>

      <PopularAution />
    </div>
  );
}

export default page
