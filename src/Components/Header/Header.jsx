import { useEffect, useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      {/* check debug justify-center */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          {/* =========logo=========== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              B
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Behrooz
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Zendedel
              </p>
            </div>
          </div>
          {/* ===========logo end================ */}
          {/* =============== menu start============ */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10 flex-row-reverse">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#about"
                >
                  درباره من
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#services"
                >
                  خدمات
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#portfolio"
                >
                  نمونه کار
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600]"
                  href="#contact"
                >
                  ارتباط با من
                </a>
              </li>
            </ul>
          </div>
          {/* ===============menu end ============= */}
          {/* ====================menu right start ============= */}
          <div className=" flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-out duration-700">
              {/* add react-icon to be for change remixicon */}
              <BsSendFill href="09222806847" />
              برقراری تماس
            </button>
            <span
              onClick={toggleMenu}
              className=" text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <IoMdMenu />
            </span>
          </div>
          {/* ====================menu right end ============= */}
        </div>
      </div>
    </header>
  );
};

export default Header;
