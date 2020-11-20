import React from "react";
import style from "../../login/login.module.css";

export const renderField = ({
  placeholder,
  className,
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className={style.content}>
    <div className={`${style.content_label} ${className}`}>
      <label className={style.field_label}>{label}</label>
    </div>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={style.login_input}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
