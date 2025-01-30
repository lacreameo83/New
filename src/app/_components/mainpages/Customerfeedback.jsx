// import React from 'react'
import Blackbutton from "../reseable/Blackbutton";
import Button from "../reseable/Button";
import Users from "../../../../public/Users.png";
import img1 from "../../../../public/footerimage/02.png";
import img2 from "../../../../public/footerimage/03.png";
import img3 from "../../../../public/footerimage/04.png";
import img4 from "../../../../public/footerimage/05.png";
import img5 from "../../../../public/footerimage/06.png";
import img6 from "../../../../public/footerimage/07.png";
import img7 from "../../../../public/footerimage/08.png";
import img8 from "../../../../public/footerimage/09.png";
import img9 from "../../../../public/footerimage/10.png";
import img10 from "../../../../public/footerimage/11.png";
import img11 from "../../../../public/footerimage/12.png";
import img12 from "../../../../public/footerimage/13.png";
import img13 from "../../../../public/footerimage/14.png";
import img14 from "../../../../public/footerimage/15.png";
import img15 from "../../../../public/footerimage/16.png";
import img16 from "../../../../public/footerimage/17.png";
import Image from "next/image";
// import img1 from "../../assets/footerimage/02.png";
function CustomersFeedback() {
  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
    { src: img7, alt: "Image 7" },
    { src: img8, alt: "Image 8" },
    { src: img9, alt: "Image 9" },
    { src: img10, alt: "Image 10" },
    { src: img11, alt: "Image 11" },
    { src: img12, alt: "Image 12" },
    { src: img13, alt: "Image 13" },
    { src: img14, alt: "Image 14" },
    { src: img15, alt: "Image 15" },
    { src: img16, alt: "Image 16" },
  ];
  return (
    <div className="flex-center flex-col w-full">
      {/* <div className=" grid grid-cols-2 xl:w-full"></div> */}
      <div className="w-fit  relative   ">
        <div
          style={{ paddingLeft: "29px" }}
          className="w-[370px] self- rounded-tl-[20px] flex items-center gap-2 pl-[29px] relative h-[42px] bg-[rgba(27,28,40,1)] "
        >
          <div className="absolute right-[-15px] top-[-10px] bg-black w-[30px] rotate-[-30deg] h-[49px] "></div>
          <div className="h-[9px] rounded-full w-[9px] bg-[rgba(119,128,161,1)]"></div>
          <div className="h-[9px] rounded-full w-[9px] bg-[rgba(119,128,161,1)]"></div>
          <div className="h-[9px] rounded-full w-[9px] bg-[rgba(119,128,161,1)]"></div>
        </div>
        <div
          style={{
            // paddingLeft: "118px",
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
          className="max-w-[1392px] p-10 md:w-[100%] xl:w-full items-center bg-gradient-to-b  rounded-b-[20px] rounded-tr-[20px] grid grid-cols-1 sm:grid-cols-2 from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)]"
        >
          <div className="flex flex-col  gap-[48px] ">
            <p className="inter text-[rgba(119,128,161,1)] font-[500] text-[15px] w-[459px] leading-[18.15pxpx] ">
              Overline
            </p>
            <p className="xl:w-[590px] font-[600] text-[64px] leading-[64px] ">
              Cursus vitae sollicitudin donec nascetur. Join now
            </p>
            <p className="inter text-[rgba(119,128,161,1)] text-[16px] xl:w-[459px] leading-[24px] ">
              Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
              pulvinar ultricies dolor feugiat aliquam commodo.
            </p>
            <div className="flex items-center gap-[16px]">
              <Button text="Get started" />
              <Blackbutton text="Learn more" />
            </div>
          </div>

          <div>
           
            <Image src={Users} width={900} height={900} alt="Users" />
          </div>
        </div>
      </div>

      <div>
        <div
          style={{ marginBottom: "80px" }}
          className="flex items-center overflow-x-auto  gap-4 p-6"
        >
          {images.map((image, index) => (
            <div key={index} className=" shadow-md">
              {/* <img className=" object-cover h-[100px] xl:h-[89px] xl:w-[89px] " /> */}
              <Image src={image.src} alt={image.alt} height={89} width={89} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomersFeedback;
