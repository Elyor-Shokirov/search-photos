import React from "react";
import TypingText from "../components/typingText";
import "./about.css";
function About() {
  return (
    <div className="max-w-[1440px] m-auto px-4 sm:px-6 lg:px-8">
      <div className="md:mt-[150px] grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12 xl:col-span-5 mt-[80px] ">
          <p className="font-monserat text-xl">Hi There, Im</p>
          <h1 className="text-[60px] text-[#292929] text-[700]">
            Elyor Shokirov
          </h1>
          <span className="h-[3px] w-[140px] mb-[9px] mt-0 inline-block bg-brandColor"></span>

          <div>
            <TypingText />
          </div>
          <p className="font-monserat text-justify text-lg">
            Hi, I'm Elyor Shokirov, a passionate and detail-oriented Front-End
            Developer with a keen eye for design and user experience. I
            specialize in building modern, responsive, and high-performance
            websites that seamlessly blend functionality with aesthetics. My
            focus is on creating interactive and dynamic user interfaces using
            the latest technologies and best practices.
          </p>
          <div className="mt-[50px]">
            <button className="p-5 bg-brandColor  rounded-[8px] font-monserat font-bold text-white">
              Contact me
            </button>
          </div>
        </div>
        <div className=" sm:col-span-7 col-span-12">
          <div className="banner-top !sm:ml-[200px] ml-16 ">
            <div className=" banner_img ml-[100px] mt-[60px] rounded-l-[50%] rounded-tl-[50%] rounded-tr-[50%] border-[15px] relative !z-[80] overflow-hidden border-black w-[60%] flex items-center ">
              <img
                className="w-[82%]"
                src="../../public/img/admin2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
