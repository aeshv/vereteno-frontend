import React, { useState } from "react";

function DropdownList(props) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <select value={selectedOption} onChange={handleChange}>
      {props.options.map((option) => (
        <option value={option} key={option}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default DropdownList;