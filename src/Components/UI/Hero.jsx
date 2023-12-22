import heroImg from "../../assets/images/imageme.jpeg";
// import Countup from "react-countup";
import { CiMail } from "react-icons/ci";
import { IoLogoAppleAr } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14 ">
        <div className="flex flex-col-reverse md:flex-row">
          {/* hero img */}
          <div className="md:basis-1/3 mt-10 md:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" className="rounded-[50%]" />
            </figure>
          </div>
          {/* hero left content */}
          <div className="w-full md:basis-1/2 md:ml-12 text-right">
            <h5
              className="text-headingColor font-[600] text-[16px]"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              سلام دوستان
            </h5>
            <h1
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[50px] mt-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              من بهروز زنده دل هستم
              <br /> برنامه نویس فرانت اند
            </h1>
            <div
              className="flex items-center flex-row-reverse gap-6 mt-7 "
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
            >
              <a href="#contact">
                <button className="flex  items-center flex-row-reverse bg-primaryColor text-white font-[500] ap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <CiMail size={20} className="ml-2" />
                  راه ارتباطی
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-smallTextColor"
              >
                مشاهده رزومه
              </a>
            </div>
            <p
              className="flex gap-2  flex-row-reverse  text-smallTextColor mt-12 font-[500] text-[15px] leading-7 sm:pr-10 sm:justify-center text-right w-full"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <span className="sm:mt-2 sm:ml-8 mt-2 ml-8 ">
                <IoLogoAppleAr />
              </span>
              به صورت حرفه ای و پاره وقت در حوزه برنامه نویسی فرانت اند فعالیت
              میکنم و همچنین در حوزه شبکه به صورت تمام وقت مشغول به کار میباشم
              برای برقراری ارتباط و سفارش کار از راه های ارتباطی در دسترس
              استفاده نمایید
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[500]">
                شبکه های اجتماعی من
              </span>
              <span>
                <a
                  href="https://vercel.com/dashboard"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <GrDeploy
                    size={30}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
              <span>
                <a
                  href="https://web.whatsapp.com/09222806847"
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
                  href="https://github.com/Behrooz-zendehdel"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaGithub
                    size={30}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/behrooz.zen/?utm_source=qr&igsh=ZTg2em9pa2k4cncy"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <FaInstagram
                    size={30}
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
