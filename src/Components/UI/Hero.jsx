import React from "react";
import heroImg from "../../assets/images/hero.svg";
import Countup from "react-countup";
import { CiMail } from "react-icons/ci";
import { IoLogoAppleAr } from "react-icons/io5";
import { CiYoutube, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import "aos/dist/aos.css";
const Hero = () => {
  return (
    <section className="pt-0" id="#about">
      <div className="container pt-14 ">
        <div className="md:flex flex  items-center justify-between sm:flex-col md:flex-row">
          {/* =========== hero left contant ============== */}
          <div className="w-full flex flex-col justify-between items-center md:basis-1/2">
            <h5
              data-aos="fade-down"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello wellcome
            </h5>
            {/* consume profile name and family */}
            <h1
              data-aos="fade-left"
              data-aos-duration="1500"
              className=" text-headingColor  font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I m Behrooz zendedel <br /> Frontend Developer
            </h1>

            <div
              className="flex items-center gap-6 mt-7"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
            >
              <a href="#contant">
                <button className="flex items-center bg-primaryColor text-white font-[500] ap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <CiMail size={20} />
                  Hire me
                </button>
              </a>
              {/* see portfolio and follow me  */}
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px border-b border-smallTextColor"
              >
                see portfolio
              </a>
            </div>
            {/* description live me  */}
            <p
              className="flex gap-2  text-smallTextColor mt-12 font-[500] text-[15px] leading-7 sm:pr-10 sm:justify-center text-center w-full"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <span className="sm:mt-2 sm:ml-8 mt-2 ml-8">
                <IoLogoAppleAr />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, amet!
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[500]">
                Follow me
              </span>
              {/* social media and follow me  */}
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <CiYoutube
                    size={30}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaWhatsapp
                    size={30}
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaInstagram
                    size={30}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
              <span>
                <a
                  href="#youtube"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <CiLinkedin
                    size={30}
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
            </div>
          </div>
          {/* =========== hero left end ============== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
