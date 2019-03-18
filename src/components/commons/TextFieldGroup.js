import React from "react";
import classnames from "classnames";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={classnames("textField textField--trans", {
          error: error
        })}
      />
      <span />
      {info && <small className="textField__info">{info}</small>}
      {error && <small className="error__message">{error}</small>}
    </React.Fragment>
  );
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
