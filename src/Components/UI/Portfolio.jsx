import { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
const Portfolio = () => {
  const [nextItems, setNetxItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHandler = () => {
    setNetxItems((prev) => prev + 3);
  };
  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };
  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }
    if (selectTab === "web-design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "ux-design") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPortfolios(filteredData);
    }
  }, [selectTab]);
  console.log(selectTab);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center flex-row-reverse justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[1.5rem] font-[600] ">
            پروژه های اخیر من
            </h3>
          </div>
          <div className="flex gap-3 ">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white"
            >
              همه
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]  hover:bg-smallTextColor hover:text-white"
            >
              طراحی سایت
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]  hover:bg-smallTextColor hover:text-white"
            >
              طراحی با وردپرس
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center ">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1200"
              key={index}
              className="group max-w-full w-64 h-38 relative z-[1] mt-12 rounded-[8px]"
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
                  >
                    بزودی
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 ">
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
            >
              موارد بیشتر
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
};

export default Portfolio;
