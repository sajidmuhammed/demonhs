import React from "react";

const InputField = ({
  type,
  name,
  placeholder,
  className = "",
  onlyNumbers = false,
  ...rest
}) => {
  const handleKeyDown = (e) => {
    if (
      onlyNumbers &&
      !/[0-9]/.test(e.key) &&
      !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

export default InputField;
