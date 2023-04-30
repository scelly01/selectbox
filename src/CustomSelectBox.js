import React, { useState } from "react";

const CustomSelectBox = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-select-box">
      <div className="selected-option" onClick={toggleOptions}>
        {selectedOption || "Select an option"}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li className="option" key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelectBox;
