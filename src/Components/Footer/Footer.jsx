import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12 pb-12">
      {/* =============footer top ========== */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2 ">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[1.5rem] mb-12">
              آیا می خواهید محصولات زیبایی بسازید؟
            </h2>
            <a href="#contact">
              <button className="flex items-center bg-primaryColor text-white font-[500] ap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <CiMail size={20} className="mr-2" />
                Hire me
              </button>
            </a>
          </div>
          <div className="w-full flex flex-col sm:w-1/2 ">
            <p className="text-gray-300 text-right leading-7 mt-4 sm:mt-0">
              آدرس : شهرک شریعتی خیابان ماهان میدان ماهان خیابان نیکوکار مجتمع
              ماهان
              <br />
              <p className="">شماره تماس : 2806847 0922 - 09351080958</p>
            </p>
            <div className=" flex items-center flex-row-reverse gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                : شبکه های اجتماعی
              </span>

              <span
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1100"
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  "
              >
                <a
                  href="https://www.instagram.com/behrooz.zen/?utm_source=qr&igsh=ZTg2em9pa2k4cncy"
                  className="text-gray-300 font-[600] text-[18px]"
                >
                  <FaInstagram size={25} />
                </a>
              </span>

              <span
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  "
              >
                <a href="" className="text-gray-300 font-[600] text-[18px]">
                  <FaGithub size={25} />
                </a>
              </span>
              <span
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1300"
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  "
              >
                <a href="" className="text-gray-300  font-[600] text-[18px]">
                  <FaWhatsapp size={25} />
                </a>
              </span>
              <span
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1200"
                className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  "
              >
                <a href="" className="text-gray-300 font-[600] text-[18px]">
                  <GrDeploy size={25} />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center  flex-row-reverse gap-10 mt-10 justify-center">
            <li>
              <a
                className="text-gray-400 hover:text-white font-[600]"
                href="#about"
              >
                درباره من
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-white font-[600]"
                href="#services"
              >
                خدمات
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-white font-[600]"
                href="#portfolio"
              >
                نمونه کار
              </a>
            </li>
            <li>
              <a
                className="text-gray-400  hover:text-white font-[600]"
                href="#contact"
              >
                ارتباط با من
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* ==========footer top end ======== */}
    </footer>
  );
};

export default Footer;
