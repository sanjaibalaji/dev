import React,{FC,MouseEventHandler} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import css2 from "./StylishHomeProducts.module.scss";



interface CustomRightArrowProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
  }
  
  const CustomRightArrow: FC<CustomRightArrowProps> = ({ onClick }) => {
    return (
      <button 
        onClick={onClick}
        className={`react-multiple-carousel__arrow ${css2.rightBtn} `}
       
      >
         &#10095;
      </button>
    );
  };
  
  export default CustomRightArrow;