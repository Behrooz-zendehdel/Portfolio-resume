import data from "../../assets/data/portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700] ">
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3 ">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Web Design
            </button>
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              UX Design
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center ">
          {data?.map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
              key={index}
              className="group max-w-full w-64 h-48 relative z-[1] mt-12"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute mt-4 top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 ">
                    Comming soong
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
