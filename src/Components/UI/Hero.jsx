import React from "react";
import heroImg from "../../assets/images/hero.svg";
import Countup from "react-countup";
import "aos/dist/aos.css";
const Hero = () => {
  return (
    <section className="pt-0" id="#about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* =========== hero left contant ============== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-down"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello wellcome
            </h5>
            <h1
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-headingColor  font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I m Behrooz zendedel <br /> Frontend Developer
            </h1>
          </div>
          {/* =========== hero left end ============== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
