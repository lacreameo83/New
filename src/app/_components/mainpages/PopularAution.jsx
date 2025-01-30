"use client";
import React, { useRef } from "react";
import Blackbutton from "../reseable/Blackbutton";
import AuctionCards from "../cards/ActionCards";
import { IoIosArrowForward } from "react-icons/io";
import item1 from "../../../../public/Item1.png";
import item2 from "../../../../public/Item2.png";
import item3 from "../../../../public/Item3.png";
import Usercard from "../cards/Usercard";

// icons


function PopularAution() {
  const containerRef = useRef(null);

  const data = [
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 20,
      image: item1,
      total: 122,
      bid: 101,
      user: [
        {
          user1: "1",
          user2: "2",
          user3: "3",
          user4: "4",
        },
      ],
    },
    {
      title: "Dui accumsan leo vestibulum ornare eu",
      price: 1.11,
      time: 40,
      image: item2,
      total: 522,
      bid: 101,
      user: [
        {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 10,
      image: item3,
      total: 922,
      bid: 101,
      user: [
        {
          user1: "3",
          user2: "3",
          user3: "33",
          user4: "3",
        },
      ],
    },
    {
      title: "Senectus adipiscing nascetur accumsan etiam",
      price: 1.63,
      time: 5,
      image: item1,
      total: 102,
      bid: 101,
      user: [
        {
          user1: "2",
          user2: "3",
          user3: "3",
          user4: "3",
        },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 30,
      image: item2,
      total: 12,
      bid: 101,
      user: [
        {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
      ],
    },
    {
      title: "Vulputate felis purus viverra morbi facilisi eget",
      price: 3.19,
      time: 20,
      image: item3,
      total: 722,
      bid: 101,
      user: [
        {
          user1: "",
          user2: "",
          user3: "",
          user4: "",
        },
      ],
    },
  ];
  return (
    <div className="w-full mt-8 flex-center gap-[60px] flex-col">
      <div className="flex flex-col justify-center items-center gap-[34px]">
        <p
          style={{ marginTop: "60px" }}
          className="inter  text-[16px] text-[rgba(119,128,161,1)] leading-1[24px] font-[400]"
        >
          Overline
        </p>
        <p className="font-[600] text-[20px] leading-[25.2px] ">
          Most popular live auctions
        </p>
        <div className=" grid grid-cols-4 sm:flex sm:items-center gap-[16px]">
          <Blackbutton text="Architecture" />
          <Blackbutton text="Photography" />
          <Blackbutton text="Games" />
          <Blackbutton text="Music" />
        </div>
      </div>

      <div
        style={{ marginTop: "40px", marginBottom: "60px" }}
        className="flex relative items-center gap-2 overflow-hidden"
      >
        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex gap-8 w-[320px] md:w-[900px] xl:w-[1100px] 2xl:w-fit  element   overflow-x-auto  scrollbar-hide"
        >
          {data.map((el, i) => (
            <AuctionCards
              widthcontainer={"w-[212px]"}
              width={"w-[212px]"}
              key={i}
              text={el.title}
              btn={el.price}
              time={el.time}
              image={el.image.src}
              height={"h-[355px]"}
              visibility={"hidden"}
              textsize={"16px"}
              heightcontaine={"h-[548px] "}
              bg={"bg-[rgba(38,40,64,1)]"}
              userideas={
                <Usercard
                  width={"w-[212px]"}
                  visible={"hidden"}
                  key={i}
                  users={el.user.map((el, i) => {
                    <p className="w-[30px] h-[30px] bg-blue-600" key={i}>
                      {el}
                    </p>;
                  })}
                  total={el.total}
                  bidind={el.bid}
                />
              }
            />
          ))}
        </div>
      </div>

      <div>
        <Blackbutton text="Show me more" />
      </div>
     
    </div>
  );
}

export default PopularAution;
