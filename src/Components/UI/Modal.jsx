import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeId, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-60">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] -transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <figure>
            <img src={portfolio.imgUrl} alt="" className="rounded-[8px]" />
          </figure>
        </div>
        <div>
          <h2 className=" lg:text-2xl lg:font-[700] md:text-xl  md:font-[500]  sm:text-xl sm:font-[400] text-headingColor  my-5 mx-2   ">
            {portfolio.title}
            <p className="text-[15px] leading-7 text-smallTextColor">
              {portfolio.description}
            </p>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <h4 className="text-headingColor text-[18px] font-[700]">
                Technologeis :
              </h4>
              {portfolio.technologies.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                >
                  {item}
                </span>
              ))}
            </div>
          </h2>
          <a href={portfolio.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-2 my-2 mx-2 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Live Sites
            </button>
          </a>
        </div>
        <button onClick={()=>setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
