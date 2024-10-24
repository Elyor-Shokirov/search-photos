import React from "react";
import TypingText from "../components/typingText";
import "./about.css";
function About() {
  return (
    <div className="m-auto mb-10 max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:mt-[150px] md:grid-cols-12">
        <div className="col-span-12 mt-[80px] xl:col-span-5">
          <p className="font-monserat text-xl">Hi There, Im</p>
          <h1 className="aboutText text-[60px] text-[#292929] text-[700]">
            Elyor Shokirov
          </h1>
          <span className="mb-[9px] mt-0 inline-block h-[3px] w-[140px] bg-brandColor"></span>

          <div>
            <TypingText />
          </div>
          <p className="text-justify font-monserat text-lg">
            Hi, I'm Elyor Shokirov, a passionate and detail-oriented Front-End
            Developer with a keen eye for design and user experience. I
            specialize in building modern, responsive, and high-performance
            websites that seamlessly blend functionality with aesthetics. My
            focus is on creating interactive and dynamic user interfaces using
            the latest technologies and best practices.
          </p>
          <div className="mt-[50px]">
            <button className="rounded-[8px] bg-brandColor p-5 font-monserat font-bold text-white">
              Contact me
            </button>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-7">
          <div className="banner-top !sm:ml-[200px] ml-16">
            <div className="banner_img relative !z-[80] ml-[100px] mt-[60px] flex w-[60%] items-center overflow-hidden rounded-l-[50%] rounded-tl-[50%] rounded-tr-[50%] border-[15px] border-black">
              <img className="w-[82%]" src="img/admin2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
