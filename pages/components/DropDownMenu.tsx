import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import css from '../../styles/DropDownMenu.module.scss';
import CitiesDropDownMenu from './CitiesDropDown';

interface DropDownProps {
  children: object;
  onClick(event: string): void;
}

const ToggleDropDown = React.forwardRef<HTMLElement, DropDownProps>(({ children, onClick }, ref:any) => (
  <div className={css.drpdownicon}>
    <a
      href=""
      ref={ref}
      onClick={(e:any) => {
        e.preventDefault();
        onClick(e);
      }}
      className={css.ddropdown}  
    >
        •••
    </a>
  </div>      
));
ToggleDropDown.displayName = "Drop Down Event";

const DropDownMenu = (options:any) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle as={ToggleDropDown} />
        <Dropdown.Menu  title="">
          <div className={options.fontclass.length > 0?css.modifiedfont:''}> 
              {options.options.map((option:any,index:number)=>{
                return option.toUpperCase() === "CITIES"?
                  <div key={`{key_${index}`} className={css.dropdowngroup}><Dropdown.Item onClick={(e:any)=>{e.preventDefault();e.stopPropagation()}}  key={`menu-${option}`}>{option}</Dropdown.Item>
                  <div key={`{key_${index}`} className={css.dropdowngroupmove}><CitiesDropDownMenu options={options.cities}/></div></div>
                : <Dropdown.Item onClick={(e:any)=>{e.preventDefault();e.stopPropagation()}}  key={`menu-${option}`}>{option}</Dropdown.Item>
              })}
          </div>    
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
DropDownMenu.displayName = "Drop Down";

export default DropDownMenu;