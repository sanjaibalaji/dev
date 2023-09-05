import React ,{FC,MouseEventHandler } from "react";
import css2 from "./StylishHomeProducts.module.scss";

interface CustomLeftArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CustomLeftArrow: FC<CustomLeftArrowProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`react-multiple-carousel__arrow ${css2.leftBtn} `}
      
    >
      &#10094;
    </button>
  );
};

export default CustomLeftArrow;
