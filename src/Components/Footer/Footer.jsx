import { CiLinkedin } from "react-icons/ci";
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
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] mb-12">
              Do you want to make beautiful products ?
            </h2>
            <a href="#contant">
              <button className="flex items-center bg-primaryColor text-white font-[500] ap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <CiMail size={20} className="mr-2" />
                Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2 ">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              facere!
            </p>
            <div className=" flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me :
              </span>
              <span className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  ">
                <a href="" className="text-gray-300 font-[600] text-[18px]">
                  <FaGithub size={25} />
                </a>
              </span>
              <span className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  ">
                <a href="" className="text-gray-300 font-[600] text-[18px]">
                  <CiLinkedin size={25} />
                </a>
              </span>
              <span className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  ">
                <a href="" className="text-gray-300 font-[600] text-[18px]">
                  <GrDeploy size={25} />
                </a>
              </span>
              <span className="w-[35px] h-[35px] flex items-center justify-center bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center  ">
                <a href="" className="text-gray-300 font-[600] text-[18px]">
                  <FaWhatsapp size={25} />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-10 mt-10 justify-center">
            <li>
              <a className="text-gray-400 font-[600]" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400  font-[600]" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400  font-[600]" href="#contact">
                Contact
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
