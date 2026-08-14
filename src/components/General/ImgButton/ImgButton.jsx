const ImgButton = ({ svg, alt, onClick, className = '', children }) => {
  return <button className={`imgbutton ${className}`} onClick={onClick}>
    <img className="icon" src={svg} alt={alt} />
    {children}
  </button>;
};

export default ImgButton;