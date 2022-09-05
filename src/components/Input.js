import React from "react";

const Input = ({ id, type, value, label, checked, onChange }) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>
        <input
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    </React.Fragment>
  );
};

export default Input;
