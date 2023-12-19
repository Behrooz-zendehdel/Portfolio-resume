import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeId, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);
  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] p- transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <figure>
            <img src={portfolio.imgUrl} alt="" className="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Modal;
