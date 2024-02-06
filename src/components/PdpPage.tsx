"use client";
import colors from "./data.json";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pdpImage from "../../public/images/image 13.png";
import StarFill from "./icons/startFill";
import Favourite from "./icons/favourite";
import Link from "next/link";
import HelpIcon from "../components/icons/helpIcon";
import ShoppingBag from "../components/icons/shoppingbag";
import { PppAccordian } from "./PdpAccordian";
import { PdpCarousel } from "./PdpCarousel";
import PdpWaysToWear from "./PdpWaysToWear";
const PdpPage = () => {
  const [colorActiveButton, setColorActiveButton] = useState(0);
  const [color, setColor] = useState(colors[0].name);
  const [size, setSize] = useState("Select Size");

  const handleClick = (index: number) => {
    setColorActiveButton(index);
    setColor(colors[index].name);
  };
  return (
    <section className="w-full px-4 lg:px-70">
      <section className="mx-auto max-w-[1440px] lg:flex gap-x-10">
        <section className="w-full">
          <section className="block lg:hidden py-6">
            <strong className="text-lg lg:text-[22px] font-bold leading-7">
              Beauty Rest Microfiber Colored 90/10 Feather/Down Comforter - All
              Seasons
            </strong>
            <section className="pt-2 flex items-center">
              <p className="text-sm leading-5 font-normal pr-3 border-r border-[#656668]">
                Item #: 466105
              </p>
              <section className="flex pl-2.5 gap-x-0.5">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <p className="text-sm leading-5 font-normal pl-2.5">
                  (14 Reviews)
                </p>
              </section>
            </section>
            <section className="pt-18">
              <Link
                className="text-sm leading-5 font-normal underline underline-inset-2"
                href="#"
              >
                Shop All Beauty Rest
              </Link>
            </section>
          </section>
          <Image src={pdpImage} alt="pdp image" loading="eager" priority />
          {/* <PdpCarousel /> */}
        </section>
        <section className="mx-auto w-full max-w-[510px]">
          <section className="hidden lg:block">
            <strong className="text-[22px] font-bold leading-7">
              Beauty Rest Microfiber Colored 90/10 Feather/Down Comforter - All
              Seasons
            </strong>
            <section className="pt-2 flex items-center">
              <p className="text-sm leading-5 font-normal pr-3 border-r border-[#656668]">
                Item #: 466105
              </p>
              <section className="flex pl-2.5 gap-x-0.5">
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <StarFill />
                <p className="text-sm leading-5 font-normal pl-2.5">
                  (14 Reviews)
                </p>
              </section>
            </section>
            <section className="pt-18">
              <Link
                className="text-sm leading-5 font-normal underline underline-inset-2"
                href="#"
              >
                Shop All Beauty Rest
              </Link>
            </section>
          </section>
          <section>
            <section className="pt-30 flex text-4 leading-5 space-x-1">
              <p className="font-normal">Color: </p>
              <strong className="font-bold">{color}</strong>
            </section>
            <section className="flex flex-wrap pt-4 gap-y-5 gap-x-5 items-center">
              {colors.map((item, index) => (
                <button
                  aria-label="choose color button"
                  key={index}
                  className={`h-9 w-9 lg:h-10 lg:w-10 bg-cyan-500 rounded-full ring-offset-2 ${
                    colorActiveButton === index ||
                    (colorActiveButton === 0 && index === 0)
                      ? "lg:ring-[4px] ring-[3px] ring-[#000]"
                      : "ring-[2px] ring-[#B6B6B8]"
                  }`}
                  onClick={() => handleClick(index)}
                ></button>
              ))}
            </section>
            <section className="pt-30 flex text-4 leading-5 space-x-1 w-full justify-between">
              <section>
                <p className="font-normal inline-block">Size: </p>{" "}
                <strong className="font-bold">{size}</strong>
              </section>

              <Link className="font-normal underline ml-auto" href="#">
                Size Chart
              </Link>
            </section>
            <section className="flex flex-wrap pt-4 gap-y-2.5 gap-x-2.5 items-center">
              <button
                aria-label="choose color button"
                className="text-sm leading-5 font-bold py-2.5 px-5 border-2 border-[#000]"
              >
                Twin
              </button>
              <button
                aria-label="choose color button"
                className="text-sm leading-5 font-medium py-2.5 px-5 border border-[#B6B6B8]"
              >
                Full/Queen
              </button>
              <div className="relative"></div>
              <button
                aria-label="choose color button"
                className="relative text-sm leading-5 font-medium py-2.5 px-5 border pointer-events-none cursor-not-allowed	 border-[#B6B6B8] text-[#B6B6B8] bg-[#F0F0F0]"
              >
                King
              </button>
            </section>
            <section className="pt-30 flex items-center gap-x-1">
              <strong className="text-[#DF2429] text-xl font-bold leading-7">
                $14.97
              </strong>
              <p className="font-normal leading-5 text-base text-[#656668] line-through">
                $34.99 - $39.99
              </p>
            </section>
            <p className="text-[#DF2429] text-16 font-normal leading-5 pt-2">
              Save $25.02 (63%)
            </p>
            <section className="pt-5 flex items-center gap-1">
              <section>
                <p className="text-sm font-normal leading-5 inline-block">or</p>{" "}
                <strong className="font-bold text-18 inline-block">
                  $5.99/month*
                </strong>{" "}
                <p className="text-sm font-normal leading-5 inline-block">
                  with Stoneberry Credit
                </p>
              </section>
              <HelpIcon className="h-5 w-5" />
            </section>
            <section className="pt-3">
              <section className="bg-[#FFE2E3] text-center">
                <p className="font-bold text-18 leading-6 py-7">
                  Credit Managed Content Area
                </p>
              </section>
            </section>
            <section className="pt-3">
              <section className="bg-[#FFE2E3] text-center">
                <p className="font-bold text-18 leading-6 py-7">
                  Promotion Managed Content Area
                </p>
              </section>
            </section>
            <section className="pt-5 flex items-center">
              <section>
                <p className="font-normal inline-block">Qty: </p>{" "}
                <section></section>
              </section>
            </section>
            <section className="pt-30">
              <p className="font-normal text-18 inline-block">Availability:</p>{" "}
              <strong className="font-bold text-18 text-[#298842] leading-5">
                In Stock
              </strong>
            </section>
            <section>
              <p className="text-18 font-normal leading-5 inline-block">
                Arrives by
              </p>{" "}
              <strong className="font-bold text-18 inline-block">
                Wed, Dec 06
              </strong>
            </section>
            <Button
              type="submit"
              className="w-full bg-[#002C4E] px-4 py-7 hover:bg-[#002C4E] mt-6"
            >
              <section className="flex items-center gap-2">
                <ShoppingBag className="h-8 w-8" />
                <p className="font-bold leading-7 text-xl text-white">
                  Add to Cart
                </p>
              </section>
            </Button>
            <Button
              type="submit"
              className="w-full px-4 py-7 bg-white  hover:bg-white border border-[#B6B6B8] mt-18"
            >
              <section className="flex items-center gap-2">
                <Favourite className="h-8 w-8" />
                <p className="font-normal leading-7 text-xl text-black">
                  Add to Wish List
                </p>
              </section>
            </Button>
            <section className="pt-4">
              <section className="bg-[#FFE2E3] text-center">
                <p className="font-bold text-18 leading-6 py-7">
                  Item Level Message Managed Content Area
                </p>
              </section>
            </section>
            <section className="pt-30">
              <PppAccordian />
            </section>
          </section>
        </section>
      </section>
      <section>
        <PdpWaysToWear />
      </section>
    </section>
  );
};

export default PdpPage;
