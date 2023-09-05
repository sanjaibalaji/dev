import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import css from '../../styles/DropDownMenu.module.scss';
import DropDownIcon from "../../public/assets/SVGIcons/DropdownArrow";

interface CitiesProps {
  children: object;
  onClick(event: string): void;
}

const CityToggle = React.forwardRef<HTMLElement, CitiesProps>(({ children:any, onClick }, ref:any) => (
  <a
    href=""
    ref={ref}
    onClick={(e:any) => {
      e.preventDefault();
      onClick(e);
    }}
    className={css.cdropdown} 
  >
   <div> 
      <DropDownIcon transFormX="1" transFormY = "4" fillColor={"none"} strokeColor={"blue"} strokeWidth={.5}/>
   </div>   
  </a>
));
CityToggle.displayName = "Cities Event";

const CitiesDropDownMenu = (options:any,positionmove:string) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle as={CityToggle} />
        <Dropdown.Menu  title=""> 
          <div className={css.dropdownitemsstyle}>
              {options.options && options.options.length > 0 && options.options.map((option:any)=>{
                return <Dropdown.Item className={css.dropdownitemstyle} key={`menu-${option}`}>{option}</Dropdown.Item>
              })}
              {options && options.length > 0 && options.map((option:any)=>{
                return <Dropdown.Item className={css.dropdownitemstyle}  key={`menu-${option}`}>{option}</Dropdown.Item>
              })}
          </div>    
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

CitiesDropDownMenu.displayName = "Cities";
export default CitiesDropDownMenu;
