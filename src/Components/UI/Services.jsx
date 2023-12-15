import React from "react";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center ">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam atque maiores ad nobis odio voluptate laboriosam velit
            accusantium vero.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12 items-center">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-px-0">
            <div className="relative text-gray-700 antialiased texts font-semibold ">
              {/* ================vertical the line ruuning through the middle =========== */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2 "></div>
              {/* ========left card ========== */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Optio explicabo voluptas consectetur iure ut
                          quibusdam voluptate quidem reprehenderit asperiores
                          eum?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
