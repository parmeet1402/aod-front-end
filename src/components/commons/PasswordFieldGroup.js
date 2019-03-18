import React from "react";
import classnames from "classnames";

const PasswordFieldGroup = ({
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
        className={classnames("passwordField passwordField--trans", {
          error: error
        })}
      />
      <span />
      {info && <small className="passwordField__info">{info}</small>}
      {error && <small className="error__message">{error}</small>}
    </React.Fragment>
  );
};

PasswordFieldGroup.defaultProps = {
  type: "password"
};

export default PasswordFieldGroup;
