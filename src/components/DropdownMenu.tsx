import "./DropdownMenu.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropdownOptions from "./sub/DropdownOptions";
import { useState } from "react";

export default function DropdownMenu() {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState("A - Z");

  function handleClick() {
    setShowOptions((showOptions) => !showOptions);
  }

  const menuClass = showOptions ? 'dropdown-menu active' : "dropdown-menu";
  const sortString = `Sort by: \b \b ${value}`;
  const iconClass = showOptions ? "dropdown-icon rotate" : "dropdown-icon";

  return (
    <div className="dropdown-container">
      <div className={menuClass} onClick={handleClick}>
        <p>{sortString}</p>
        <RiArrowDropDownLine className={iconClass} />
      </div>
      <DropdownOptions show={showOptions} setValue={setValue} setShowOptions={setShowOptions} />
    </div>
  );
}
