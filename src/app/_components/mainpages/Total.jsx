import React from 'react'
import icon1 from "../../../../public/icon1.png";
import icon2 from "../../../../public/icon2.png";
import icon3 from "../../../../public/icon3.png";
import icon4 from "../../../../public/icon4.png";
import Image from 'next/image';

function Total() {
  return (
    <div>
      <div
        style={{ marginTop: "50px", marginBottom: "80px" }}
        className="flex items-center justify-center gap-5 xl:gap-[66px]"
      >
        <div className="flex flex-col items-center justify-center  gap-[24px]">
          <Image height={32} width={32} src={icon1} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">300k</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              Users Active
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[16px]">
          <Image height={32} width={32} src={icon2} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">52,5k</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              Artworks
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-[16px]">
          <Image height={32} width={32} src={icon3} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">17,5k</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              Artists
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-[16px]">
          <Image height={32} width={32} src={icon4} alt="Icon" />
          <div className="flex flex-col items-center justify-center">
            <p className="font-[600] text-[20px] leading-[25.2px] ">35.58</p>
            <p className="inter text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]">
              ETH Spent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total
