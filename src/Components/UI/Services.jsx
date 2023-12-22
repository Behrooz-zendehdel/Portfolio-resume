import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";
const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center ">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            ارائه کننده خدمات
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            با افتخار، تیم برنامه‌نویسی ما به عنوان یک ارائه‌ دهنده خدمات
            فرانت‌اند با تجربه و تخصص بالا آماده‌ایم تا به شما کمک کنیم تا تجربه
            کاربری فراگیری برنامه‌ها و وبسایت‌های خود را به یک سطح جدید ارتقا
            دهید
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12 items-center">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-px-0">
            <div className="relative text-gray-700 antialiased texts font-semibold ">
              {/* ================vertical the line ruuning through the middle =========== */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2 "></div>

              {/* ========left card 1 ========== */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 text-right  group-hover:font-[600] text-xl group-hover:text-black">
                          توسعه دهنده فرانت اند
                        </h3>
                        <p className="text-[15px] text-smallTextColor text-right group-hover:text-white group-hover:font-[600] leading-7">
                          توسعه وبسایت‌ها و اپلیکیشن‌های ما با استفاده از
                          جدیدترین فناوری‌ها و بهترین شیوه‌های برنامه‌نویسی، به
                          شما امکان می‌دهد تا با تجربه کاربری بی‌نظیر و عملکرد
                          بهینه، در دنیای دیجیتال موفق باشید
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ============left card end 1 =========== */}

              {/* ========right card 1 ========== */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor text-right  group-hover:text-black font-[700] mb-3 group-hover:font-[600] text-[18px]">
                          توسعه دهنده بک اند
                        </h3>
                        <p className="text-[15px]  text-right  text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7">
                          توانمندی در ادغام با سیستم‌های Backend مختلف از جمله
                          قابلیت‌های ماست. این ادغام باعث می‌شود تا پروژه شما به
                          طور کامل و هماهنگ عمل کند و از امکانات کامل بهره‌مند
                          شود
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ========right card end 1 ========== */}

              {/* ========left card 2 ========== */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor text-right group-hover:text-black font-[700] mb-3  group-hover:font-[600] text-xl">
                          طراحی و توسعه رابط کاربری
                        </h3>
                        <p className="text-[15px] text-right text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7">
                          توسعه رابط کاربری از جمله مهم‌ترین عوامل موفقیت یک
                          وبسایت یا برنامه موبایل است. ما با بهره‌گیری از آخرین
                          تکنولوژی‌ها و استانداردهای طراحی ، ارائه دهنده‌ای
                          حرفه‌ای برای طراحی رابط کاربری (UI) و تجربه کاربری
                          (UX) شما خواهیم بود
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ============left card end 2 =========== */}

              {/* ========right card 2========== */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor text-right group-hover:text-black font-[700] mb-3  group-hover:font-[600] text-xl">
                          سفارشی‌سازی و ادغام
                        </h3>
                        <p className="text-[15px] text-right text-smallTextColor group-hover:text-white group-hover:font-[600] leading-7">
                          اگر نیاز به ادغام سیستم‌ها یا سفارشی‌سازی قسمت‌های خاص
                          دارید، ما آماده‌ایم تا به نیازهای خاص شما پاسخ دهیم و
                          اطمینان حاصل کنیم که تکنولوژی‌های انتخابی با ساختار
                          کلی سیستم شما سازگاری دارند
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ========right card end 2 ========== */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
