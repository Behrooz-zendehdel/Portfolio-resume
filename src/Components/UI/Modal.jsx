import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeId, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeId);
  return (
    <div>
      <img src={portfolio.imgUrl} alt="" className="mt-4" />
    </div>
  );
};

export default Modal;
