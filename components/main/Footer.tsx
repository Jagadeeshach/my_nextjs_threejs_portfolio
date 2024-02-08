import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxCross2,
  RxEnvelopeClosed,
  RxMobile,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Community</div>

            <Link href="https://youtube.com/@JCodeUniverse?si=163XHTpKCGH6a9GI " className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <h1 className="text-[15px] ml-[6px]">Youtube</h1>
            </Link>

            <Link
              href="https://github.com/Jagadeeshach"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] flex">Social Media</div>
            <Link
              href="https://twitter.com/JCodeUniverse?t=bNkQfWAf1S8fQKtFoqxNWQ&s=08"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxCross2 />
            </Link>

            <Link
              href="https://www.linkedin.com/in/jagadeesha-c-h-062500236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RiFlightTakeoffFill />
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxMobile />
              <span className="text-[15px] ml-[6px]">(+91) 9961712144</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxEnvelopeClosed />
              <span className="text-[15px] ml-[6px]">
                jagadeeshach126@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; J Code Universe 2024 Inc. | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
