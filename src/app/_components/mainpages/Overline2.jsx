"use client";
import React from "react";
import leftimage from "../../../../public/leftimage.png";
import Blackbutton from "../reseable/Blackbutton";
import Button from "../reseable/Button";
import Icon1 from "../../../../public/icon1.png";
import Icon2 from "../../../../public/icon2.png";
import Image from "next/image";
function OverlLine2() {
  return (
    <div className="flex flex-col border-b-[1px] h-fit border-[rgba(38,40,64,1)]  py-14 xl:h-[100vh]  sm:flex-row gap-[150px] w-full justify-center items-center">
      <div className="max-w-[1392px]  w-[100%] grid grid-cols-1 sm:grid-cols-2 xl:w-[100%] ">
        <div className="flex-center   ">
          <Image src={leftimage} alt="RightImage" height={700} width={700} />
        </div>

        <div className="flex flex-col  gap-[48px]">
          <p className="inter text-[rgba(119,128,161,1)] font-[500] text-[15px] xl:w-[459px] leading-[18.15pxpx] ">
            Overline
          </p>

          <p className=" xl:w-[590px] font-[600] text-[64px] leading-[64px] ">
            Habitant tristique aliquam in vel scelerisque
          </p>

          <p className="inter text-[rgba(119,128,161,1)] text-[16px] xl:w-[459px] leading-[24px] ">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>

          <div className=" w-[350px] xl:w-[464px] h-[108px] flex items-center justify-between ">
            <div className="flex flex-col gap-[24px]">
              <Image src={Icon1} alt="Icon" height={32} width={32} />
              <div>
                <p className="font-[600] text-[20px] leading-[25.2px] ">
                  Sollicitudin sapien
                </p>
                <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
                  Cursus fermentum
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              {/* <img className="h[32px] w-[32px]" /> */}
              <Image src={Icon2} alt="Icon" height={32} width={32} />
              <div>
                <p className="font-[600] text-[20px] leading-[25.2px] ">
                  Pulvinar metus
                </p>
                <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
                  Nunc sed
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[16px]">
            <Button text="Get started" />
            <Blackbutton text="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverlLine2;
